import { ConvertSecondToDate, ConvertSecondToTime } from "@/config"
import { iBlog } from "./interface"
import Link from "next/link"
import { ImgC } from "../Common/image"

export default function MainSmalBlog(p: { ls: iBlog[] }) {
    return (
        <div className="w-full lg:w-1/2 my-3.5 lg:my-0 grid-rows-3 block lg:grid ">
            {p.ls.filter((_, i) => {
                
                return 0 < i && i <= 3
            })
                .map((v) => {
                    return (
                        <Link key={v.id} href={`/blog/${v.id}`} className="h-full hover:scale-105 duration-700 cursor-pointer hover:text-blue-400 flex space-x-4 p-2">
                            <ImgC src={`${v.imageurl}`} className="h-auto lg:h-40 w-50 lg:min-w-80 object-cover rounded-2xl" alt="" />
                            <div className="h-20 lg:h-40 flex flex-col justify-around">
                                <div className="line-clamp-2 lg:line-clamp-4  text-base">{v.title}</div>
                                <div className="text-sm">{ConvertSecondToDate(parseInt(v.time))}
                                </div>
                            </div>

                        </Link>
                    )
                })}
        </div>
    )
}