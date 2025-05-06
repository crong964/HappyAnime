import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://animevui.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://animevui.vercel.app/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 2,
        },
        {
            url: 'https://animevui.vercel.app/watch/dao-hai-tac',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 3,

        }
        ,
        {
            url: 'https://animevui.vercel.app/watch/gia-dinh-diep-vien-phan-2',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
            
        }
    ]
}