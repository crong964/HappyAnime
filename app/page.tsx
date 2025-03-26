
import { Banners } from "@/components/banner";
import { iBannerE } from "@/components/banner/interface";
import { CardMovie, CardMovies } from "@/components/cardmovie";
import { LinkC } from "@/components/Link";
import { GetMovies } from "@/service";
import Link from "next/link";

export default async function Home(req: {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ page: string }>
}) {

  const data = await GetMovies({ currentPage: 0, totalItemsPerPage: 30 })
  return (
    <div className="w-full text-white ">
      <div className="w-full ">
        <Banners ls={[...data.data.items] as unknown as iBannerE[]}>

        </Banners>
      </div>

      <div className="w-full">
        <div>
          Danh sách các phim
        </div>

        <CardMovies ls={data.data.items} />
        <div className="flex justify-center mt-5">
          <LinkC className="" href={'/ls?page=1'}><>Xem thêm</></LinkC>
        </div>
      </div>




      <div className="text-white">

      </div>
    </div >
  );
}
