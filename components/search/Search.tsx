"use client"
import { SearchIcon } from "@/icon";
import { useState } from "react";
import { LinkC } from "@/components/Link";

export default function SearchC() {
    const [keywword, SetKeyword] = useState("")
    return (
        <div className=" p-2 hover:text-[#F3D68D] rounded-md w-full" >
            <div className=" border-2 border-white w-full flex">
                <input onChange={(v) => {
                    let t = v.currentTarget.value
                    SetKeyword(t)
                }} value={keywword} placeholder="Tìm phim yêu tích" type="text" className=" flex-1 focus:outline-none" />
                <LinkC href={`/search?keyword=${keywword}`} onClick={(e) => {
                    SetKeyword("")
                }} className="">
                    <SearchIcon className={"cursor-pointer"}></SearchIcon>
                </LinkC>
            </div>
        </div >
    )
}