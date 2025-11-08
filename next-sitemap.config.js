/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mohammed-labs.site', // رابط موقعك الرئيسي بدون /
  generateRobotsTxt: true, // ينشئ robots.txt تلقائياً
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.mohammed-labs.site/sitemap.xml',
    ],
  },
};
