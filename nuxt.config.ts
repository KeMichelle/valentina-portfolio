// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@vercel/speed-insights',
  ],

  sitemap: {
    // Service pages are dynamic — list them explicitly so the sitemap includes them
    urls: [
      '/services/maternita',
      '/services/neonati',
      '/services/famiglia',
      '/services/smash-cake',
      '/services/natale',
      '/services/natura',
      '/services/mommy-me',
      '/services/matrimonio',
    ],
    exclude: ['/privacy', '/cookie-policy'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      meta: [
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Valentina Cometti Fotografa' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'it_IT' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  googleFonts: {
    families: {
      'Cormorant+Garamond': [300, 400, 600],
      Inter: [300, 400, 500],
    },
  },

  runtimeConfig: {
    // Private - server-only (never sent to client)
    smtpUser: '', // set via NUXT_SMTP_USER env var
    smtpPass: '', // set via NUXT_SMTP_PASS env var
    contactEmail: '', // set via NUXT_CONTACT_EMAIL env var

    // Public - exposed to client
    public: {
      siteUrl: 'https://www.valentinacometti.it',
    },
  },
});
