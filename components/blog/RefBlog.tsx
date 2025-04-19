import { ConvertSecondToDate } from "@/config"
import { iBlog } from "./interface"
import Link from "next/link"
import { ImgC } from "../Common/image"

export default function RefBlog(p: { ls: iBlog[] }) {
    return (
        <div className=" block lg:flex flex-wrap">
            {
                p.ls
                    .map((v) => {
                        return (
                            <Link key={v.id} href={`/blog/${v.id}`}
                                className="rounded-lg cursor-pointer w-full lg:w-1/3 p-0 lg:p-2 hover:text-blue-400">
                                <div className="w-full flex lg:block rounded-2xl p-2 hover:scale-105 duration-700">
                                    <ImgC src={`${v.imageurl}`} className=" min-w-50 h-25 lg:w-full lg:h-[250px] rounded-2xl object-cover" alt="" />
                                    <div className="px-2">
                                        <div className="text-xs p-2">{ConvertSecondToDate(parseInt(v.time))}
                                        </div>
                                        <div className="w-full line-clamp-2">
                                            {v.title}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
            }

        </div>
    )
}