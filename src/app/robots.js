export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.goolkai.com/sitemap.xml',
    host: 'https://www.goolkai.com',
  };
}
