
import Link from "next/link";
import Image from "next/image";
import { Item } from "./interface";

import { ButtomHeart } from "@/components/heart";
import { GetImage } from "@/config";

export default function CardMovie(p: Item) {
    return (
        <div className="relative w-1/3 md:w-1/5 lg:w-1/6 p-1 lg:p-3  lg:hover:scale-110 duration-700">
            <div className="absolute flex justify-between w-full z-20 top-0 right-0 p-1 lg:p-4">
                <div className="bg-amber-600 text-black text-sm flex items-center p-1 rounded-sm">{p.episode_current.replace("Hoàn Tất", "")}</div>
                <ButtomHeart {...p as any} />
            </div>
            <Link href={`/watch/${p.slug}`} title={p.name} className=" w-full hover:text-blue-500 ">
                <div className="md:min-h-[90%]">
                    <img className="w-full h-auto opacity-90 rounded-xl" alt={p.name} width={300} height={100} src={GetImage(p.poster_url)}></img>
                </div>

                <div className="line-clamp-2 md:line-clamp-1 max-sm:text-sm">{p.name}</div>
            </Link>
        </div>
    )
}

