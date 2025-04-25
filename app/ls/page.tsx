import { Banners } from "@/components/banner"
import { iBannerE } from "@/components/banner/interface"
import { CardMovie, CardMovies } from "@/components/cardmovie"
import { LinkC } from "@/components/Link"
import { domain, title } from "@/config/GetEnv"

import { GetMovies } from "@/service"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
    { searchParams }: {
        searchParams: Promise<{ page: string }>
    },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const page = parseInt((await searchParams).page || "1")
    return {
        alternates: {
            canonical: `${domain}/ls?page=${page}`
        }
    }
}

export default async function LsPage(req: {
    searchParams: Promise<{ page: string }>,
}) {
    const page = parseInt((await req.searchParams).page || "1")
    const data = await GetMovies({ currentPage: page, totalItemsPerPage: 30 })
    const totalpage = data?.data?.params.pagination?.totalPages
    const itemm = data?.data?.items
    let e = []
    if (page <= 5) {
        for (let i = 1; i < page + 14; i++) {
            if (i == page) {
                e.push(<LinkC key={i} className="bg-blue-600" href={`/ls?page=${i}`}><>{i}</></LinkC>)
            } else {
                e.push(<LinkC key={i} className="" href={`/ls?page=${i}`}><>{i}</></LinkC>)
            }
        }
    } else {
        for (let i = page - 5; i < page + 9 && i < totalpage; i++) {
            if (i == page) {
                e.push(<LinkC key={i} className="bg-blue-600" href={`/ls?page=${i}`}><>{i}</></LinkC>)
            } else {
                e.push(<LinkC key={i} className="" href={`/ls?page=${i}`}><>{i}</></LinkC>)
            }
        }
    }

    return (
        <>
            <div className="w-full my-3">
                <Banners ls={[...itemm] as unknown as iBannerE[]} />
            </div>
            <div className="w-full">
                <div className="my-6 font-bold text-2xl text-center">
                    Danh sách các phim
                </div>
                <CardMovies ls={itemm} />
            </div>
            <div className="flex justify-center mt-5  ">
                <div className="mt-5 w-[70%] overflow-x-auto">
                    <div className="flex justify-around space-x-2">{e}</div>
                </div>
            </div>
        </>
    )
}