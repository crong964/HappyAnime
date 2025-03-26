import { CardMovie, CardMovies } from "@/components/cardmovie"
import { LinkC } from "@/components/Link"

import { GetMovies } from "@/service"



export default async function LsPage(req: {
    searchParams: Promise<{ page: string }>,
}) {
    const page = parseInt((await req.searchParams).page || "1")
    const data = await GetMovies({ currentPage: page, totalItemsPerPage: 32 })
    const totalpage = data.data.params.pagination.totalPages
    let e = []
    if (page <= 5) {
        for (let i = 0; i < page + 14; i++) {
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

            <div className="w-full">
                <div className="my-6 font-bold text-2xl">
                    Danh sách các phim
                </div>
                <CardMovies ls={data.data.items} />
            </div>
            <div className="mt-5 w-full overflow-x-auto">
                <div className="flex justify-center space-x-2">{e}</div>
            </div>
        </>
    )
}