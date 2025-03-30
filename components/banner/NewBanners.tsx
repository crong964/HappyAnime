"use client"
import { useEffect, useState } from "react";
import { Banner } from ".";
import { iBanners } from "./interface";
import { GetImage } from "@/config";

import Link from "next/link";
import { ButtomHeart } from "@/components/heart";

export default function Banners(p: iBanners) {
    const [s, SetS] = useState(0)
    useEffect(() => {
        const f = setTimeout(() => {
            SetS((s + 1) % p.ls.length)
        }
            , 800000000)
        return () => {
            clearTimeout(f)
        };
    }, [s]);
    const cur = p.ls[s]



    return (
        <div className="h-[200px] sm:h-[500px] relative flex space-x-6 px-4">
            
            {p.ls.filter((v, i) => {
                return i == s
            }).map((v) => {
                return (
                    <Banner key={v.name} className="flex-1 p-3 bg-white flex" name="" thumb_url={v.thumb_url}>
                        <>
                            <div className=" w-1/2 sm:flex hidden items-end justify-start">
                                <div className=" w-[500px] space-x-1.5 relative">

                                </div>
                            </div>
                            <div className=" animate-appealefttoright  w-1/2 sm:flex hidden items-center">
                                {cur ?
                                    <div>
                                        <div className="font-bold text-white text-5xl">
                                            {cur.name}
                                        </div>
                                        <div className="text-base">
                                            {cur.origin_name}
                                        </div>
                                        <div className="flex space-x-2">
                                            {v.category.map((v) => {
                                                return <div className="bg-[#41383E] px-2 py-1 cursor-pointer" key={v.slug}>{v.name}</div>
                                            })}
                                        </div>
                                        <div className="flex space-x-2 mt-3">
                                            <Link href={"/watch/" + cur.slug} className="px-2 py-1 bg-white hover:bg-[#F3D588] text-black rounded-lg">
                                                Xem phim
                                            </Link>
                                            <ButtomHeart {...p as any} />
                                        </div>
                                    </div> :
                                    <>
                                    </>}
                            </div>
                        </>
                    </Banner>
                )
            })}
            <div className="h-full hidden lg:block">
                {p.ls.filter((v, i) => {
                    return i < 3
                }).map((v, i) => {
                    let g = (s + i + 1) % p.ls.length
                    let c = p.ls[g]
                    return (
                        <div key={g} onClick={() => {
                            SetS(g)
                        }} title={c.name} className="h-1/3 animate-rise hover:scale-120 duration-400 cursor-pointer">
                            <img title={c.name} src={GetImage(c.thumb_url)} alt="" className="h-full w-auto" />
                           
                        </div>
                    )
                })}
            </div>
        </div>
    )
}