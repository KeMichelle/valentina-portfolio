import nodemailer from 'nodemailer';

function escapeHtml(str: string): string {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#x27;');
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, email, service, message } = body;

  // Basic server-side validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Nome non valido.' });
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Email non valida.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Messaggio non valido.',
    });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim());
  const safeService =
    service && typeof service === 'string' && service.trim().length >= 2
      ? escapeHtml(service.trim())
      : 'Non specificato';

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: config.smtpUser as string,
      pass: config.smtpPass as string,
    },
  });

  const siteUrl =
    (config.public as { siteUrl?: string }).siteUrl ||
    'https://www.valentinacometti.it';
  const serviceReplyText =
    safeService === 'Non specificato'
      ? ''
      : ` riguardo al servizio di ${safeService}`;
  const serviceReplyHtml =
    safeService === 'Non specificato'
      ? ''
      : ` riguardo a <em>${safeService}</em>`;

  try {
    // --- Notification email to Valentina ---
    await transporter.sendMail({
      from: `"Portfolio Valentina" <${config.smtpUser}>`,
      to:
        (config.contactEmail as string) ||
        'valentinacomettifotografa@outlook.it',
      replyTo: email.trim(),
      subject: `Nuova richiesta da ${safeName} – ${safeService} · valentinacometti.it`,
      text: `Nome: ${name.trim()}\nEmail: ${email.trim()}\nServizio: ${safeService}\n\n${message.trim()}`,
      html: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px 0;background:#ede8e0;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;">
    <tr><td>

      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#2c2418;border-radius:4px 4px 0 0;">
        <tr>
          <td style="padding:28px 40px 20px;">
            <p style="margin:0 0 5px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:3.5px;text-transform:uppercase;color:#c4a882;">Valentina Cometti</p>
            <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;font-weight:400;color:rgba(250,246,239,0.4);letter-spacing:2px;text-transform:uppercase;">Fotografa · Bergamo</p>
          </td>
        </tr>
        <tr>
          <td style="background:#3a2d1d;padding:10px 40px;">
            <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#d6c4a8;">Nuova richiesta · valentinacometti.it</p>
          </td>
        </tr>
      </table>

      <!-- Body -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf6ef;border-left:1px solid #ddd4c2;border-right:1px solid #ddd4c2;">
        <tr>
          <td style="padding:36px 40px 30px;">

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#a09080;padding:11px 0 9px;border-bottom:1px solid #ede6da;width:84px;vertical-align:top;">Nome</td>
                <td style="font-size:15px;color:#2c2418;padding:11px 0 9px 16px;border-bottom:1px solid #ede6da;">${safeName}</td>
              </tr>
              <tr>
                <td style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#a09080;padding:11px 0 9px;border-bottom:1px solid #ede6da;vertical-align:top;">Email</td>
                <td style="font-size:15px;padding:11px 0 9px 16px;border-bottom:1px solid #ede6da;"><a href="mailto:${safeEmail}" style="color:#7d8c5c;text-decoration:none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#a09080;padding:11px 0 9px;border-bottom:1px solid #ede6da;vertical-align:top;">Servizio</td>
                <td style="font-size:15px;color:#2c2418;padding:11px 0 9px 16px;border-bottom:1px solid #ede6da;">${safeService}</td>
              </tr>
            </table>

            <p style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#a09080;margin:0 0 12px;">Messaggio</p>
            <div style="background:#fff;border-left:2px solid #c4a882;padding:18px 22px;font-size:15px;line-height:1.9;color:#3a2d20;white-space:pre-line;">${safeMessage}</div>

            <div style="margin-top:30px;padding-top:24px;border-top:1px solid #ede6da;">
              <a href="mailto:${safeEmail}?subject=Re: ${safeService}" style="display:inline-block;background:#2c2418;color:#faf6ef;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:13px 30px;border-radius:2px;">Rispondi a ${safeName}</a>
              <p style="margin:13px 0 0;font-size:12px;color:#b0a090;font-family:'Helvetica Neue',Arial,sans-serif;">Risponderai direttamente a <a href="mailto:${safeEmail}" style="color:#9d8060;text-decoration:none;">${safeEmail}</a></p>
            </div>

          </td>
        </tr>
      </table>

      <!-- Footer -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#ede8e0;border:1px solid #ddd4c2;border-top:none;border-radius:0 0 4px 4px;">
        <tr>
          <td style="padding:16px 40px;text-align:center;">
            <p style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;color:#b0a090;margin:0 0 5px;letter-spacing:1px;">
              <a href="https://www.instagram.com/by.mothernature.fotografie/" style="color:#9d8060;text-decoration:none;">Instagram</a>
              &nbsp;&middot;&nbsp;
              <a href="${siteUrl}" style="color:#9d8060;text-decoration:none;">valentinacometti.it</a>
            </p>
            <p style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;color:#c8b8a8;margin:0;">Richiesta ricevuta tramite il form di contatto</p>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`,
    });

    // --- Confirmation email to the client ---
    await transporter.sendMail({
      from: `"Valentina Cometti Fotografa" <${config.smtpUser}>`,
      to: email.trim(),
      subject: `Ho ricevuto il tuo messaggio – Valentina Cometti`,
      text: `Ciao ${name.trim()},\n\nGrazie per avermi scritta.\n\nHo ricevuto il tuo messaggio${serviceReplyText} e ti risponderò entro 24 ore.\n\nNel frattempo, se vuoi sognare un po', puoi sfogliare il mio portfolio o seguirmi su Instagram.\n\nA presto,\nValentina\n\n---\nValentina Cometti · Fotografa a Bergamo\n${siteUrl}`,
      html: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px 0;background:#ede8e0;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;">
    <tr><td>

      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#2c2418;border-radius:4px 4px 0 0;">
        <tr>
          <td style="padding:40px 40px 32px;text-align:center;">
            <p style="margin:0 0 10px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#c4a882;">Fotografa · Bergamo</p>
            <h1 style="margin:0 0 16px;font-size:26px;font-weight:400;color:#faf6ef;letter-spacing:1px;">Valentina Cometti</h1>
            <div style="width:28px;height:1px;background:rgba(196,168,130,0.4);margin:0 auto 14px;"></div>
            <p style="margin:0;font-family:Georgia,serif;font-style:italic;font-size:13px;color:rgba(214,196,168,0.6);line-height:1.7;">Gravidanza &middot; Neonati &middot; Famiglie</p>
          </td>
        </tr>
      </table>

      <!-- Accent line -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#c4a882;">
        <tr><td style="height:2px;font-size:0;">&nbsp;</td></tr>
      </table>

      <!-- Body -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf6ef;border-left:1px solid #ddd4c2;border-right:1px solid #ddd4c2;">
        <tr>
          <td style="padding:44px 40px 40px;">
            <p style="margin:0 0 10px;font-size:12px;font-family:'Helvetica Neue',Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#a09080;">Ciao ${safeName},</p>
            <h2 style="margin:0 0 26px;font-size:21px;font-weight:400;color:#2c2418;line-height:1.5;font-style:italic;">Sono davvero contenta che tu mi abbia scritto.</h2>

            <p style="font-size:15px;line-height:1.9;color:#4a3a2e;margin:0 0 16px;">
              Ho ricevuto il tuo messaggio${serviceReplyHtml} e ti rispondo entro <strong style="color:#2c2418;font-weight:500;">24 ore</strong>. Non vedo l'ora di immaginare insieme la vostra sessione.
            </p>
            <p style="font-size:15px;line-height:1.9;color:#4a3a2e;margin:0 0 36px;">
              Nel frattempo, se vuoi sognare un po', puoi sfogliare il mio portfolio o seguirmi su Instagram.
            </p>

            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="https://www.instagram.com/by.mothernature.fotografie/" style="display:inline-block;background:#2c2418;color:#faf6ef;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:13px 28px;border-radius:2px;">Instagram</a>
                </td>
                <td>
                  <a href="${siteUrl}" style="display:inline-block;background:transparent;color:#2c2418;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:12px 28px;border-radius:2px;border:1px solid #c4a882;">Portfolio</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Signature -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4ede4;border-left:1px solid #ddd4c2;border-right:1px solid #ddd4c2;border-top:1px solid #e6ddd2;">
        <tr>
          <td style="padding:28px 40px 30px;">
            <p style="font-family:Georgia,serif;font-size:14px;color:#6a5a4a;margin:0 0 3px;font-style:italic;">A presto,</p>
            <p style="font-family:Georgia,serif;font-size:21px;font-weight:400;color:#2c2418;margin:0 0 12px;letter-spacing:0.5px;">Valentina</p>
            <p style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;color:#b0a090;margin:0;letter-spacing:1.5px;text-transform:uppercase;">Fotografa a Bergamo</p>
          </td>
        </tr>
      </table>

      <!-- Footer -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#2c2418;border-radius:0 0 4px 4px;">
        <tr>
          <td style="padding:18px 40px;text-align:center;">
            <p style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;color:#8a7a6a;margin:0;letter-spacing:1px;">
              <a href="https://www.instagram.com/by.mothernature.fotografie/" style="color:#c4a882;text-decoration:none;">Instagram</a>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
              <a href="${siteUrl}" style="color:#c4a882;text-decoration:none;">valentinacometti.it</a>
            </p>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[contact] SMTP error:', msg);
    throw createError({
      statusCode: 502,
      statusMessage: 'Errore invio email. Riprova più tardi.',
    });
  }

  return { ok: true };
});
