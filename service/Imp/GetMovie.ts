import { GetApi } from "@/config"
import { ApiReponseMovie } from "@/service/interface/Movie"

 

export default async function GetMovies(slug: string): Promise<ApiReponseMovie> {
    const data = await GetApi(`${process.env.URL}${slug}`)
    return data
}