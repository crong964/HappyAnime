
import { Banners } from "@/components/banner";
import { iBannerE } from "@/components/banner/interface";
import NewBanners from "@/components/banner/NewBanners";
import { CardMovies } from "@/components/cardmovie";
import { LinkC } from "@/components/Link";
import { GetMovies } from "@/service";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ page: string }>
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await GetMovies({ currentPage: 0, totalItemsPerPage: 1 })

  const se0 = data.data.seoOnPage
  return {
    title: `Anime Vui-${se0.titleHead}`,
    description: se0.descriptionHead,

  }
}

export default async function Home(req: {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ page: string }>
}) {

  const data = await GetMovies({ currentPage: 0, totalItemsPerPage: 30 })
  return (
    <div className="w-full ">
      <div className="w-full my-3">
        <Banners ls={[...data.data.items] as unknown as iBannerE[]}>

        </Banners>
      </div>
      <div className="w-full my-10">
        <div className="font-bold text-3xl">
          Danh sách các phim
        </div>

        <CardMovies ls={data.data.items} />
        <div className="flex justify-center mt-5">
          <LinkC className="" href={'/ls?page=1'}><>Xem thêm</></LinkC>
        </div>
      </div>
    </div >
  );
}
