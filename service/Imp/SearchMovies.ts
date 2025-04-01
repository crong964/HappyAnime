import { GetApi } from "@/config"

import { iSearch } from "@/service/interface/SearchMovies"
import { ApiResponse } from "@/service/interface/Movies"

export default async function GetMoviesByCategory(p: iSearch): Promise<ApiResponse> {
    const data = await GetApi(`${process.env.SEARCH}${p.keyword}&limit=${p.limit}`)  
    return data
}