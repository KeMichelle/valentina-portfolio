interface InstagramRefreshResponse {
  access_token: string;
  token_type: string;
}

interface VercelEnvVar {
  id: string;
  key: string;
  target: string[];
}

interface VercelEnvListResponse {
  envs: VercelEnvVar[];
}

interface VercelDeployment {
  uid: string;
}

interface VercelDeploymentListResponse {
  deployments: VercelDeployment[];
}

export default defineEventHandler(async (event) => {
  // Vercel automatically sends this header when CRON_SECRET is set in your project env vars
  const authHeader = getHeader(event, 'authorization');
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    throw createError({ statusCode: 401, message: 'Unauthorized' });
  }

  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!currentToken) {
    throw createError({
      statusCode: 500,
      message: 'INSTAGRAM_ACCESS_TOKEN not set',
    });
  }

  const vercelToken = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!vercelToken || !projectId) {
    throw createError({
      statusCode: 500,
      message: 'VERCEL_TOKEN or VERCEL_PROJECT_ID not set',
    });
  }

  // 1. Refresh the Instagram long-lived token
  const refreshed = await $fetch<InstagramRefreshResponse>(
    'https://graph.instagram.com/refresh_access_token',
    {
      query: {
        grant_type: 'ig_refresh_token',
        access_token: currentToken,
      },
    },
  );
  const newToken = refreshed.access_token;

  // 2. Find the env var ID in Vercel for INSTAGRAM_ACCESS_TOKEN (production)
  const envList = await $fetch<VercelEnvListResponse>(
    `https://api.vercel.com/v9/projects/${projectId}/env`,
    { headers: { Authorization: `Bearer ${vercelToken}` } },
  );
  const envVar = envList.envs.find(
    (e) =>
      e.key === 'INSTAGRAM_ACCESS_TOKEN' && e.target.includes('production'),
  );
  if (!envVar) {
    throw createError({
      statusCode: 500,
      message: 'INSTAGRAM_ACCESS_TOKEN not found in Vercel project env vars',
    });
  }

  // 3. Update the env var value
  await $fetch(
    `https://api.vercel.com/v9/projects/${projectId}/env/${envVar.id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
      body: { value: newToken },
    },
  );

  // 4. Trigger a redeploy of the latest production deployment so the new token takes effect
  const deployList = await $fetch<VercelDeploymentListResponse>(
    `https://api.vercel.com/v6/deployments?projectId=${projectId}&target=production&limit=1`,
    { headers: { Authorization: `Bearer ${vercelToken}` } },
  );
  const latestDeploy = deployList.deployments[0];
  if (latestDeploy) {
    await $fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
      body: { deploymentId: latestDeploy.uid, target: 'production' },
    });
  }

  return { success: true, refreshedAt: new Date().toISOString() };
});
