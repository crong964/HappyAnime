import { LinkProps } from "next/link";
import { Attributes, JSX, LinkHTMLAttributes } from "react";

export interface LinkCLinkProps extends LinkProps {
    className: string
    children: JSX.Element
}
