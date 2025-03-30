import { SearchIcon } from "@/icon";


export default function SearchC() {
    return (
        <form action={"/search"} className="hover:text-[#F3D68D] rounded-lg py-0.5 px-2 border-2 border-white w-full flex">
            <input name="keyword" placeholder="Tìm phim yêu tích" type="text" className="px-1 flex-1 focus:outline-none" />
            <button type="submit" className="">
                <SearchIcon className={"cursor-pointer"}></SearchIcon>
            </button>
        </form>
    )
}