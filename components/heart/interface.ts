import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Item } from "../cardmovie/interface";

export interface iButtomC extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    poster_url: string;
    thumb_url: string; 
    name: string;
    slug: string;
}