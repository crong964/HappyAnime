import { FilmIcon, HomeIcon, SearchIcon } from "@/icon";
import Link from "next/link";

export default function Navi() {
    return (
        <>
            <Link className="flex flex-col items-center" href={'/'}>
                <HomeIcon className=""></HomeIcon>
                <p className="text-sm">Home</p>
            </Link>
            <Link className="flex flex-col items-center" href={'/save'}>
                <FilmIcon className=""></FilmIcon>
                <p className="text-sm">Save</p>
            </Link>
            <Link className="flex flex-col  items-center" href={'/searchmobile'}>
                <SearchIcon className=""></SearchIcon>
                <p className="text-sm">Search</p>
            </Link>
        </>
    )
}