import { CardMovies } from "@/components/cardmovie"
import { SearchMovies } from "@/service"

export default async function WatchPage(req: {
    searchParams: Promise<{ keyword: string }>
}) {
    const keyword = (await req.searchParams).keyword
    const search = await SearchMovies({ keyword: keyword, limit: 20 })
    return (
        <>

            <div className="font-bold text-2xl my-6">Từ khóa tìm kiếm: {keyword}</div>
            <CardMovies ls={search.data.items.filter((v) => {
                return v.type == "hoathinh"
            })} />

        </>
    )
}