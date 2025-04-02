"use client"
import Link from "next/link";
import { LinkCLinkProps } from "./interface";
import { usePathname } from "next/navigation";


export default function LinkC(p: LinkCLinkProps) {
    const path = usePathname()
    return (
        <Link {...p} className={`${p.href === path ? "text-white" : "text-t"} px-4 py-1 rounded-lg hover:bg-blue-600 sm:text-t ${p.className} `}>
            {p.children}
        </Link>
    )
}