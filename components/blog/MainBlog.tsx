import { ConvertSecondToDate, ConvertSecondToTime } from "@/config";
import { iBlog } from "./interface";
import Link from "next/link";
import { ImgC } from "@/components/Common/image";

export default function MainBlog(p: { b: iBlog }) {
    const v = p.b
    return (
        <Link scroll={true} key={v.id} href={`/blog/${v.id}`} className="w-full lg:w-1/2 flex flex-col justify-around space-y-3" title={v.title}>
            <ImgC src={`${v.imageurl}`} className="w-full h-90 rounded-2xl object-cover" alt={v.id} />
            <div>{ConvertSecondToDate(parseInt(v.time))}</div>
            <div className="text-2xl line-clamp-3 ">{v.title}</div>
            <div className="text-base line-clamp-3 ">{v.description}</div>
        </Link>
    )
}