"use client"
import { JSX, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Banner } from ".";
import { iBanners } from "./interface";
import { GetImage } from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { ButtomHeart } from "@/components/heart";

export default function Banners(p: iBanners) {
    const [s, SetS] = useState(0)
    const duration = 4
    const sl = 4
    useEffect(() => {
        const f = setTimeout(() => {
            SetS((s + 1) % p.ls.length)
        }
            , 5000)
        return () => {
            clearTimeout(f)
        };
    }, [s]);
    const cur = p.ls[s]
    const e: JSX.Element[] = []
    const c = cur

    // if (s == 0) {
    //     for (let i = s; i < s + sl + 1; i++) {
    //         const c = p.ls[i % p.ls.length]
    //         e.push(
    //             <img style={{ left: i * 100 }}
    //                 src={GetImage(c.thumb_url)}
    //                 className={`w-[100px]  h-auto top-0 absolute  `} alt="" srcSet="" />
    //         )
    //     }
    // } else {
    //     const start = p.ls[s - 1]
    //     e.push(
    //         <motion.img
    //             key={start.name}
    //             initial={{ left: 0 }}
    //             animate={{ left: -100 }} transition={{ duration: duration }}
    //             src={GetImage(start.thumb_url)}
    //             className="w-[100px]  h-auto absolute" alt="" srcSet="" />
    //     )
    //     for (let i = s; i < s + sl; i++) {
    //         let c = p.ls[i % p.ls.length]
    //         e.push(
    //             <motion.img key={c.name} initial={{ left: 100 * (i - s + 1) }}
    //                 animate={{ left: (i - s) * 100 }} transition={{ duration: duration }}
    //                 style={{ position: "absolute" }}
    //                 src={GetImage(c.thumb_url)}
    //                 className="w-[100px]  h-auto" alt="" srcSet="">
    //             </motion.img>
    //         )
    //     }
    //     let f = p.ls[(s + sl) % p.ls.length]
    //     e.push(
    //         <motion.img key={f.name}
    //             initial={{ left: "100%" }}
    //             animate={{ left: sl * 100 }} transition={{ duration: duration }}
    //             src={GetImage(f.thumb_url)}
    //             className="w-[100px]  h-auto  absolute" alt="" srcSet="" />
    //     )
    // }

    return (
        <div className="h-[200px] sm:h-[500px] relative ">
            {p.ls.filter((v, i) => {
                return i == s
            }).map((v) => {
                return (
                    <Banner key={v.name} className="absolute top-0 left-0 flex " name="" thumb_url={v.thumb_url}>
                        <>
                            <div className=" w-1/2 sm:flex hidden items-end justify-start pb-16">
                                <div className=" w-[500px] space-x-1.5 relative">
                                    
                                </div>
                            </div>
                            <div className="animate-appealefttoright w-1/2 sm:flex hidden items-center">
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
                                            <Link href={"/watch/"+cur.slug} className="px-2 py-1 bg-white hover:bg-[#F3D588] text-black rounded-lg">
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
            {p.ls.filter((v, i) => {
                return i != s
            }).map((v) => {
                return (
                    <Banner key={v.name} className="absolute top-0 -left-full" name="" thumb_url={v.thumb_url}>
                        <></>
                    </Banner>
                )
            })}

        </div>
    )
}