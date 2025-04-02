import { FilmIcon, HomeIcon, SearchIcon } from "@/icon";
import Link from "next/link";
import { LinkC } from "@/components/Link";

export default function Navi() {
    return (
        <>
            <LinkC className="flex flex-col items-center" href={'/'}>
                <>
                    <HomeIcon className=""></HomeIcon>
                    <p className="text-sm">Home</p>
                </>
            </LinkC>
            <LinkC className="flex flex-col items-center" href={'/save'}>
                <>
                    <FilmIcon className=""></FilmIcon>
                    <p className="text-sm">Save</p>
                </>
            </LinkC>
            <LinkC className="flex flex-col  items-center" href={'/searchmobile'}>
                <>
                    <SearchIcon className=""></SearchIcon>
                    <p className="text-sm">Search</p>
                </>
            </LinkC>
        </>
    )
}