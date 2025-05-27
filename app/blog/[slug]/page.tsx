import blogService from "@/backend/service/BlogService"
import { RefBlog } from "@/components/blog"
import { ImgC } from "@/components/Common/image"
import { ShowContentC } from "@/components/quill"

import { GetApi } from "@/config"
import { domain, pathimage, revalidate } from "@/config/GetEnv"
import Link from "next/link"
import { Metadata } from "next/types"
interface Props {
    params: Promise<{ slug: string }>
}
export async function generateMetadata(p: Props): Promise<Metadata> {
    const id = (await p.params).slug
    const blog = (await GetApi(`${domain || ""}/api/blog/${id}`))?.d
    if (blog) {
        return {
            keywords: blog.keywords,
            authors: { name: "Anime Vui" },
            title: blog.title,
            category: "entertainment",
            description: (blog.description as string).slice(0, 155),
            alternates: {
                canonical: `${domain}/blog/${id}`
            }
        }
    }
    return {}
}
export default async function IdBlogPage({ params, }: Props) {
    const id = (await params).slug
    const blog = (await GetApi(`${domain || ""}/api/blog/${id}`))?.d

    if (blog == undefined) {
        return (
            <Link href={'/blog'} className="h-screen w-full flex justify-center font-bold text-5xl items-center">
                Không có bài viết này
                {domain || ""}
            </Link>
        )
    }
    let otherblog = await blogService.GetOtherBlog(blog)
    if (otherblog.length <= 0) {
        otherblog = (await GetApi(`${domain || ""}/api/blog`, revalidate))?.ls
    }
    return (
        <>

            <div className="relative mt-4 mb-8">
                <ImgC src={blog.imageurl} alt={id} className="opacity-65 h-70 lg:h-140 object-center lg:object-cover w-full" />
                <div className="absolute bottom-0 font-bold text-2xl lg:text-5xl text-white p-2">
                    {blog.title}
                </div>
            </div>
            <div className="flex justify-center">

                <div className="h-max w-full px-2 lg:px-0 lg:w-[80%]">
                    <ShowContentC content={blog.content.replaceAll('<img src="', `<img src="${pathimage}`)}></ShowContentC>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="w-full lg:w-[80%]  ">
                    <div className="text-5xl font-bold my-14 border-t-2 border-white p-2">
                        Bài viết khác
                    </div>

                    <RefBlog ls={otherblog} />

                </div>
            </div>

        </>
    )
}

