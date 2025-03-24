import { GetApi } from "@/config"
import { ApiResponse, iGetMovie } from "@/app/service/interface/Movies"

export default async function GetMovies(p: iGetMovie): Promise<ApiResponse> {
    const data = await GetApi(`${process.env.URLBE}&limit=${p.totalItemsPerPage}&page=${p.currentPage}`)
    return data
}