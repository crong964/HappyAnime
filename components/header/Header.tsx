
import { SearchC } from "@/components/search";
import { LinkC } from "components/Link";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full sm:flex justify-center bg-[#404174e3] text-white">
            <div className="w-full sm:w-[80%] flex py-4 space-x-2 items-center">
                <Link href={"/"} className="text-3xl font-bold hover:bg-none">
                    <> Happy Anime</>
                </Link>
                <SearchC />
                <LinkC href={'/save'} className="">
                    <i className="text-2xl bi bi-film text-center"></i>
                </LinkC>
            </div>
        </div>
    )
}