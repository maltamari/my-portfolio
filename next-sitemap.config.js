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
    additionalSitemaps: [
      'https://www.mohammed-labs.site/sitemap.xml',
    ],
  },

  // تخصيص الأولويات والتحديث حسب نوع الصفحة
  transform: async (config, path) => {
    // الصفحة الرئيسية
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // صفحات Projects و Services (أولوية عالية)
    if (path.startsWith('/projects') || path.startsWith('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // صفحات المشاريع الفردية (إذا كانت ديناميكية)
    if (path.match(/\/projects\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // صفحات الخدمات الفردية
    if (path.match(/\/services\/[^/]+$/)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // باقي الصفحات
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }
  },
};
