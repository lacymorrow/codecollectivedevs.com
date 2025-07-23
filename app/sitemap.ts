import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/base-url';

const siteUrl = BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/schedule',
    '/case-studies/artisan',
    '/case-studies/datasync',
    '/case-studies/techflow',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
