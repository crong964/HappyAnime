import { HomeIcon } from "@/icon";
import Link from "next/link";

export default function Navi() {
    return (
        <>
            <Link href={'/'}>
                <HomeIcon className=""></HomeIcon>
                <p className="text-sm">Home</p>
            </Link>
            <Link href={'/'}>
                <HomeIcon className=""></HomeIcon>
                <p className="text-sm">Home</p>
            </Link>
        </>
    )
}