import Link from "next/link";
import { SearchC } from "@/components/search";

export default function Header() {
    return (
        <div className="w-full sm:flex justify-center bg-[#404174e3] text-white">
            <div className="w-full sm:w-[80%] flex py-4 space-x-2 items-center">
                <Link href={"/"} className="text-3xl font-bold">
                    Happy Anime
                </Link>
                <SearchC />
                <div title="phim yêu thích" className="sm:block hidden">
                    <i className="text-2xl bi bi-film text-center"></i>

                </div>
            </div>
        </div>
    )
}