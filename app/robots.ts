import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ['Applebot', 'Bingbot', 'Googlebot'],
                allow: ['/'],
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/'],
            },
        ],
        sitemap: 'https://animevui.vercel.app/sitemap.xml',
    }
}