
import { SearchC } from "@/components/search";
import { WatchedIcon } from "@/icon";
import { LinkC } from "components/Link";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full sm:flex justify-center bg-[#404174e3] ">
            <div className="w-full sm:w-[80%] flex py-2 space-x-2 items-center">
                <Link href={"/"} className="text-3xl font-bold hover:bg-none">
                    <>Anime Vui</>
                </Link>
                <span className="hidden sm:block w-[50%]">
                    <SearchC />
                </span>

                <LinkC href={'/save'} className="hidden sm:block">
                    <i className="text-2xl bi bi-film text-center"></i>
                </LinkC>
                <LinkC href={'/history'} className="hidden sm:block">
                    <WatchedIcon className="text-2xl bi bi-film text-center"/>
                </LinkC>
            </div>
        </div>
    )
}