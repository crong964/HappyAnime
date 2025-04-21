import { Category, Country } from "@/service/interface/Movies";


export interface Item {
    modified: { time: string };
    _id: string;
    name: string;
    slug: string;
    origin_name: string;
    type: string;
    poster_url: string;
    thumb_url: string;
    time: string;
    episode_current: string;
    quality: string;
    lang: string;
    year: number;
    category: Category[];
    country: Country[];
    content: string
}

export interface iCardMovies {
    ls: Item[]
}