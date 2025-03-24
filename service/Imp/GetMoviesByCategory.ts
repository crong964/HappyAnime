import { GetApi } from "@/config"

import { iMoviesByCategory } from "@/service/interface/MoviesByCategory"
import { ApiResponse } from "../interface/Movies"

export default async function GetMoviesByCategory(p: iMoviesByCategory): Promise<ApiResponse> {
    const data = await GetApi(`${process.env.URLBE}&limit=${p.totalItemsPerPage}&page=${p.currentPage}&category=${p.category}`)
    return data
}