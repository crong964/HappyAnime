import { Banner } from "@/components/banner";
import { CardMovies } from "@/components/cardmovie";
import { VideoC } from "@/components/video";
import { GetImage } from "@/config";
import { GetMovie, GetMoviesByCategory } from "@/service";
import Link from "next/link";


export default async function WatchPage(req: {
  params: Promise<{ movie: string }>,
  searchParams: Promise<{ episodesI: string, serverdataJ: string }>
}) {
  const slug = (await req.params).movie

  const data = await GetMovie(slug)
  const episodesI = (await req.searchParams).episodesI
  const serverdataJ = (await req.searchParams).serverdataJ
  let url = ''
  if (episodesI != undefined && serverdataJ != undefined) {
    url = data.episodes[parseInt(episodesI)].server_data[parseInt(serverdataJ)].link_m3u8
  }
  const movie = data.movie

  const category = await GetMoviesByCategory({ category: movie.category[0].slug, currentPage: 0, totalItemsPerPage: 14 })

  return (
    <>
      {url == '' ?
        <Banner name={movie.name} thumb_url={movie.thumb_url} className="">
          <>

          </>
        </Banner> :
        <VideoC link_m3u8={url}></VideoC>}

      <div className="flex justify-center text-white translate-y-4">
        <div className="w-full sm:w-[90%] flex sm:space-x-2.5">
          <div className="sm:block hidden sm:w-[300px]  rounded-2xl p-7">
            <img src={GetImage(movie.poster_url)} className="w-[180px] mx-2 mb-2 h-auto" alt="" srcSet="" />
            <p className="text-lg">{movie.name}</p>
            <div className="flex flex-wrap gap-1">{movie.category.map((v) => {
              return (
                <Link href={''} className="bg-black text-center rounded-3xl hover:bg-amber-400 p-1">
                  {v.name}
                </Link>
              )
            })}</div>
          </div>
          <div className="sm:mx-4 flex-1 max-h-[500px] overflow-y-auto">
            <div className="font-bold text-2xl">Tập phim</div>
            {data.episodes.map((episodes, i) => {
              return (
                <div className="">
                  <div>{episodes.server_name}</div>
                  <div className=" flex flex-wrap ">
                    {episodes.server_data.map((server_data, j) => {
                      {
                        return (episodesI === (i + "") && serverdataJ === (j + "")) ?
                          <Link key={server_data.filename} href={`?episodesI=${i}&serverdataJ=${j}`} className=" text-center rounded-3xl bg-amber-400 w-[calc(25%-8px)] lg:w-[calc(20%)] py-4" >
                            {server_data.name}
                          </Link>
                          :
                          <Link key={server_data.filename} href={`?episodesI=${i}&serverdataJ=${j}`} className="bg-black text-center rounded-3xl hover:bg-amber-400 w-[calc(25%-8px)] lg:w-[calc(20%)] py-4" >
                            {server_data.name}
                          </Link>

                      }
                    })}
                  </div>
                </div>
              )

            })}
          </div>
        </div>
      </div >
      <div className="flex justify-center">
        <div className="w-full sm:w-[90%]">
          <div className="font-bold my-9 text-3xl">Có thể cũng thích</div>
          <CardMovies ls={category.data.items} />
        </div>
      </div>
    </>
  );
}
