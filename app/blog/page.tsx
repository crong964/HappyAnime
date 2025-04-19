import { MainBlog, MainSmalBlog, OtherBlog } from "@/components/blog"
import { GetApi } from "@/config"
import { domain, revalidate } from "@/config/GetEnv"


export default async function BlogPage() {
     
    const ls = (await GetApi(`${domain || ""}/api/blog`, revalidate))?.ls

    if (ls == undefined) {
        return <div> Không có bài vi</div>
    }

    return (
        <div className="flex justify-center">
            <div className="w-full lg:w-[80%] ">
                <div className="text-5xl py-10 font-bold">Bài viết mới</div>
                <div className="flex space-x-2.5  flex-col lg:flex-row h-max lg:h-150">
                    <MainBlog b={ls[0]} />
                    <MainSmalBlog ls={ls} />
                </div>
                <div className="text-5xl py-10 font-bold">Bài viết khác</div>
                <OtherBlog ls={ls}></OtherBlog>
            </div>
        </div>
    )
}

