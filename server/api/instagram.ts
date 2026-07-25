interface InstagramMediaItem {
  id: string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

interface InstagramResponse {
  data: InstagramMediaItem[];
}

export default defineEventHandler(async () => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    throw createError({
      statusCode: 500,
      message: 'Instagram token not configured',
    });
  }

  const response = await $fetch<InstagramResponse>(
    'https://graph.instagram.com/me/media',
    {
      query: {
        fields: 'id,media_url,thumbnail_url,permalink,media_type',
        limit: 16, // fetch extra to account for videos being filtered out
        access_token: token,
      },
    },
  );

  return response.data
    .filter(
      (post) =>
        post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM',
    )
    .slice(0, 8)
    .map((post) => ({
      id: post.id,
      src: post.media_url,
      permalink: post.permalink,
    }));
});
