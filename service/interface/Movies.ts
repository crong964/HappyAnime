import { Item } from "@/components/cardmovie/interface";

export interface iGetMovie {
    totalItemsPerPage: number,
    currentPage: number,
}
export interface SeoOnPage {
    og_type: string;
    titleHead: string;
    descriptionHead: string;
    og_image: string[];
    og_url: string;
}

export interface BreadCrumb {
    name: string;
    slug?: string;
    isCurrent: boolean;
    position: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Country {
    id: string;
    name: string;
    slug: string;
}



export interface Pagination {
    totalItems: number;
    totalItemsPerPage: number;
    currentPage: number;
    totalPages: number;
}

export interface Params {
    type_slug: string;
    filterCategory: string[];
    filterCountry: string[];
    filterYear: string[];
    filterType: string[];
    sortField: string;
    sortType: string;
    pagination: Pagination;
}

export interface ApiResponse {
    status: string;
    msg: string;
    data: {
        seoOnPage: SeoOnPage;
        breadCrumb: BreadCrumb[];
        titlePage: string;
        items: Item[];
        params: Params;
        type_list: string;
        APP_DOMAIN_FRONTEND: string;
        APP_DOMAIN_CDN_IMAGE: string;
    };
}
