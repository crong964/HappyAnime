
import { Item } from "@/components/cardmovie/interface";
import { Category } from "./Movies";

export interface ApiReponseMovie {
    id: string;
    title: string;
    url: string;
    image: string; 
    release_date: string;
    genres: string[];
    other_name: string;
    duration: string;
    quality: string;
    lang: string;
    country: string;
    description: string;
    actors: string[];
    directors: string[];
    episodes: Episode[];
    movie: Item;
    category: Category[]
}

export interface Episode {
    server_name: string;
    server_data: EpisodeData[];
}

export interface EpisodeData {
    name: string;
    slug: string;
    filename: string;
    link_embed: string;
    link_m3u8: string;
}
