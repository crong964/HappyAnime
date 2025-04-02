'use client'
import { useEffect, useState } from "react";
import { iHistory } from "./interface";
import { ButtomHeart } from "@/components/heart";
import Image from "next/image";
import { GetImage } from "@/config";
import Link from "next/link";
import { XcircleIcon } from "@/icon";


export default function HistoryPage() {
    const [ls, SetLs] = useState<{ [key: string]: iHistory | undefined }>({})
    useEffect(() => {
        SetLs(JSON.parse(localStorage.getItem("his") || "{}"))
        return () => {

        };
    }, []);
    let e = []

    for (const key in ls) {

        const p = ls[key];
        if (p) {
            e.push(
                <div key={p.slug} className="relative w-1/3 md:w-1/5 lg:w-1/6 p-1 sm:p-3 lg:hover:scale-110 duration-700">
                    <div className="absolute  top-0 left-0 p-1 sm:p-3 z-20">
                        <ButtomHeart name={p.nameMovie} poster_url={p.poster_url} slug={p.slug} thumb_url={p.thumb_url} />
                    </div>
                    <div onClick={() => {
                        if (confirm("bạn muốn xóa chứ")) {
                            const lss = JSON.parse(localStorage.getItem("his") || "{}")
                            lss[p.slug] = undefined
                            localStorage.setItem("his", JSON.stringify(lss))
                            location.reload()
                        }
                    }} className="absolute  top-0 right-0 p-1 sm:p-3 z-20">
                        <XcircleIcon {...p as any} />
                    </div>
                    <div className="h-[90%]">
                        <Link href={`${p.url}`} className=" w-full hover:text-blue-500 ">
                            <Image className="w-full  h-auto opacity-90 rounded-xl" alt={p.nameMovie} width={300} height={100} src={GetImage(p.poster_url)}></Image>
                        </Link>
                    </div>
                    <div className="line-clamp-1">{p.nameMovie}</div>
                </div>
            )
        }

    }
    return (
        <>
            <div className="font-bold text-center text-2xl my-5">
                Danh sách xem lại
            </div>
            <div className=" flex justify-center">
                <div className="w-full lg:w-[80%] flex flex-wrap">
                    {e}
                </div>
            </div>

        </>
    )
}