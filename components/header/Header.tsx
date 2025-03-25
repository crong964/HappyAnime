
import { SearchC } from "@/components/search";
import LinkC from "../Link/LinkC";

export default function Header() {
    return (
        <div className="w-full sm:flex justify-center bg-[#404174e3] text-white">
            <div className="w-full sm:w-[80%] flex py-4 space-x-2 items-center">
                <LinkC href={"/"} className="text-3xl font-bold">
                    <> Happy Anime</>
                </LinkC>
                <SearchC />
                <LinkC href={'/save'} className="sm:block hidden">
                    <i className="text-2xl bi bi-film text-center"></i>
                </LinkC>
            </div>
        </div>
    )
}