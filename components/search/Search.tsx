"use client"
import { SearchIcon } from "@/icon";
import { useState } from "react";
import { LinkC } from "@/components/Link";

export default function SearchC() {
    const [keywword, SetKeyword] = useState("")
    return (
        <div className="hidden sm:flex p-2 border-2 border-white hover:text-[#F3D68D] rounded-md w-[50%]" >
            <input onChange={(v) => {
                let t = v.currentTarget.value
                SetKeyword(t)
            }} value={keywword} placeholder="Tìm phim yêu tích" type="text" className=" flex-1 focus:outline-none" />
            <LinkC href={`/search?keyword=${keywword}`} onClick={(e) => {
                SetKeyword("")
            }} className="">
                <SearchIcon className={"cursor-pointer"}></SearchIcon>
            </LinkC>
        </div >
    )
}