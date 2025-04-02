'use client'
import { useEffect, useState } from "react";
import { iSave } from "./interface";

import { ButtomHeart } from "@/components/heart";
import { LinkC } from "@/components/Link";
import Image from "next/image";
import { GetImage } from "@/config";
import Link from "next/link";

export default function SavePage() {
    const [ls, SetLs] = useState<{ [key: string]: iSave }>({})
    useEffect(() => {
        SetLs(JSON.parse(localStorage.getItem("ls") || "{}"))
        return () => {

        };
    }, []);
    let e = []

    for (const key in ls) {

        const p = ls[key];
        if (p) {
            e.push(
                <div key={p.slug} className="relative w-1/3 md:w-1/5 lg:w-1/6 p-1 sm:p-3 lg:hover:scale-110 duration-700">
                    <div className="absolute flex justify-between w-full z-20 top-0 right-0 p-1 sm:p-3">
                        <ButtomHeart {...p as any} />
                    </div>
                    <div className="h-[90%]">
                        <Link href={`/watch/${p.slug}`} className=" h-max w-full hover:text-blue-500 ">
                            <>
                                <Image className="w-full h-auto opacity-90 rounded-xl" alt={p.name} width={300} height={100} src={GetImage(p.poster_url)}></Image>

                            </>
                        </Link>
                    </div>
                    <div className="line-clamp-1">{p.name}</div>
                </div>
            )
        }

    }
    return (
        <>
            <div className="font-bold text-center text-2xl my-5">
                Danh sách yêu thích của bạn
            </div>
            <div className=" flex justify-center">
                <div className="w-full lg:w-[80%] flex flex-wrap">
                    {e}
                </div>
            </div>

        </>
    )
}