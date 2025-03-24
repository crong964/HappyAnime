import { Category } from "@/app/service/interface/Movies";
import { JSX } from "react";

export interface iBanner {
    name: string; thumb_url: string;
    className: string
    children: JSX.Element

}
export interface iBannerE extends iBanner {
    name: string; thumb_url: string;
    className: string
    children: JSX.Element
    origin_name: string;
    category: Category[];
}
export interface iBanners {
    ls: iBannerE[]
}