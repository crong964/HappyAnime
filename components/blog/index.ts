import { lazy } from "react";

export const MainBlog = lazy(() => import("./MainBlog"))
export const MainSmalBlog = lazy(() => import("./MainSmalBlog"))
export const OtherBlog = lazy(() => import("./OtherBlog"))
export const RefBlog = lazy(() => import("./RefBlog"))