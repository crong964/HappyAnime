'use client'
import { HeartIcon } from "@/icon";
import { iButtomC } from "./interface";
import { useEffect, useState } from "react";


export default function ButtomHeart(params: iButtomC) {
    const [store, SetStore] = useState(false)
    useEffect(() => {
        const ls = JSON.parse(localStorage.getItem("ls") || "{}")
        SetStore(ls[params.slug] != undefined)
    }, [params])
    return <button onClick={() => {
        const ls = JSON.parse(localStorage.getItem("ls") || "{}")
        if (ls[params.slug]) {
            ls[params.slug] = undefined
            SetStore(false)
        } else {
            ls[params.slug] = {
                poster_url: params.poster_url,
                thumb_url: params.thumb_url,
                name: params.name,
                slug: params.slug
            }
            SetStore(true)

        }
        localStorage.setItem("ls", JSON.stringify(ls))
    }} {...params} className="cursor-pointer">
        {!store ? <HeartIcon className="text-white hover:text-pink-700" /> : <HeartIcon className="text-pink-700" />}
    </button>
}