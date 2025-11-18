/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mohammed-labs.site',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404', '/api/*', '/admin/*'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },  
};
