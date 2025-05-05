'use client'
import { CaretRightIcon, SpeedIcon } from "@/icon";
import { useState } from "react";

export default function VideoSpeed(p: { onchang(n: number): void, cur: number }) {

    const [sh, SetSh] = useState(false)

    return (
        <div className="relative size-7.5 flex items-center justify-center">
            {
                sh ? 
                <div className="min-h-56 w-70 absolute bg-[#000000d8] bottom-full right-0 pb-4">
                    <div className="p-3 bg-[#574859]">Tốc độ</div>
                    {
                        [0.25, 0.5, 1, 1.5, 2, 2.25]
                            .map((v, i) => {
                                return (
                                    <div onClick={() => {
                                       
                                        p.onchang(v)
                                    }} key={i} className="py-2 flex items-center px-4 w-full gap-3 cursor-pointer hover:bg-[#574859]">
                                        {p.cur == v ? <CaretRightIcon className="size-4" /> : <div className="size-4"></div>} {v}
                                    </div>
                                )
                            })
                    }
                </div> : <></>
            }
            <div onClick={() => {
                SetSh(!sh)
            }}>
                <SpeedIcon className="size-7.5 lg:size-5 hover:scale-150 duration-700" />
            </div>
        </div>
    )
}