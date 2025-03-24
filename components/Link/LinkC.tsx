import Link from "next/link";
import { LinkCLinkProps } from "./interface";


export default function LinkC(p: LinkCLinkProps) {
    return (
        <Link {...p} className={`${p.className} px-4 py-1 rounded-lg hover:bg-blue-600 text-white`}>
            {p.children}
        </Link>
    )

}