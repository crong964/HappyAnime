import { Banner } from "@/components/banner";
import { CardMovies } from "@/components/cardmovie";
import { ButtomHeart } from "@/components/heart";
import { VideoC } from "@/components/video";
import { GetImage } from "@/config";
import { domain } from "@/config/GetEnv";
import { GetMovie, GetMovies, GetMoviesByCategory } from "@/service";
import { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

export async function generateMetadata(
  { params, searchParams }: {
    params: Promise<{ movie: string }>,
    searchParams: Promise<{ a: string, b: string }>
  },
  parent: ResolvingMetadata
): Promise<Metadata> {

  let episodesI = (await searchParams).a
  let serverdataJ = (await searchParams).b


  const slug = (await params).movie
  const data = await GetMovie(slug)
  const movie = data?.movie
  if (movie) {
    let canonical = `${domain}/watch/${movie.slug}`
    if (episodesI != undefined && serverdataJ != undefined) {
      canonical += `?a=${episodesI}&b=${serverdataJ}`
    }
    return {
      title: `Anime Vui - ${movie.name}`,
      description: movie.content.slice(0, 155),
      keywords: ["animevui", "anime", movie.name],
      alternates: {
        canonical: canonical
      }
    }
  }
  return {

  }
}

export default async function WatchPage(req: {
  params: Promise<{ movie: string }>,
  searchParams: Promise<{ a: string, b: string }>
}) {
  const slug = (await req.params).movie

  const data = await GetMovie(slug)
  let episodesI = (await req.searchParams).a
  let serverdataJ = (await req.searchParams).b
  let urllink_m3u8 = ''
  if (episodesI != undefined && serverdataJ != undefined) {
    urllink_m3u8 = data.episodes[parseInt(episodesI) - 1].server_data[parseInt(serverdataJ) - 1].link_m3u8
  }
  const movie = data.movie
  if (!movie) {
    return (
      <div className="flex justify-center h-100 items-center text-5xl font-bold">
        Không có phim này
      </div>
    )
  }

  const category = await GetMoviesByCategory({ category: movie.category[0].slug, currentPage: 0, totalItemsPerPage: 12 })
  let ls
  if (!category.status) {
    ls = await GetMovies({ currentPage: 0, totalItemsPerPage: 12 })
  }



  return (
    <div className=" h-full">
      {urllink_m3u8 == '' ?
        <Banner name={movie.name} thumb_url={movie.thumb_url} className="">
          <>

          </>
        </Banner> :
        <VideoC link_m3u8={urllink_m3u8}
          url={`/watch/${movie.slug}?a=${episodesI}&b=${serverdataJ}`}
          nameMovie={movie.name} {...movie} />}

      <div className="flex justify-center text-white translate-y-4">
        <div className="w-full sm:w-[90%] flex sm:space-x-2.5">
          <div className="sm:block hidden sm:w-[300px]  rounded-2xl p-7">
            <img src={GetImage(movie.poster_url)} className="w-[180px] mx-2 mb-2 h-auto" alt="" srcSet="" />

          </div>
          <div className="sm:mx-4 flex-1">
            <div className="flex items-center space-x-4">
              <p className="text-lg">{movie.name}</p>
              <ButtomHeart {...movie as any} />
            </div>
            <div className="flex flex-wrap gap-1">{movie.category.map((v) => {
              return (
                <Link href={''} className="bg-black text-center rounded-3xl hover:bg-amber-400 p-1">
                  {v.name}
                </Link>
              )
            })}</div>
            <div className="font-bold text-2xl">Tập phim</div>
            <div className=" max-h-[500px] overflow-y-auto">
              {data.episodes.map((episodes, i) => {
                return (
                  <div className="">
                    <div>{episodes.server_name}</div>
                    <div className=" flex flex-wrap ">
                      {episodes.server_data.map((server_data, j) => {
                        {
                          return <div className="w-1/3 h-auto lg:w-1/5 flex p-1">
                            {(episodesI === (i + 1 + "") && serverdataJ === (j + 1 + "")) ?
                              <Link key={server_data.filename} href={`/watch/${movie.slug}?a=${i + 1}&b=${j + 1}?a=${i + 1}&b=${j + 1}`} className="size-full py-4 text-center rounded-3xl bg-amber-400 " >
                                {server_data.name}
                              </Link> : <Link key={server_data.filename} href={`/watch/${movie.slug}?a=${i + 1}&b=${j + 1}`} className="size-full py-4 bg-black text-center rounded-3xl hover:bg-amber-400 " >
                                {server_data.name}
                              </Link>}
                          </div>

                        }
                      })}
                    </div>
                  </div>
                )

              })}
            </div>
          </div>
        </div>
      </div >
      {
        category.status ?
          (
            <div className="w-full">
              <div className="text-center font-bold my-9 text-3xl">Có thể cũng thích</div>
              <CardMovies ls={category.data.items} />
            </div>
          ) :
          <>
            <div className="w-full">
              <div className="text-center font-bold my-9 text-3xl">Có thể cũng thích</div>
              <CardMovies ls={ls?.data.items || []} />
            </div>
          </>
      }
    </div>
  );
}
