'use client'
import dynamic from "next/dynamic";

export const HeartIcon = dynamic(() => import("./HeartIcon"), { ssr: false })
export const SearchIcon = dynamic(() => import("./SearchIcon"), { ssr: false })
export const FullscreenIcon = dynamic(() => import("./FullscreenIcon"), { ssr: false })
export const PlayIcon = dynamic(() => import("./PlayIcon"), { ssr: false })
export const PauseIcon = dynamic(() => import("./PauseIcon"), { ssr: false })
export const ExitFullscreenIcon = dynamic(() => import("./ExitFullscreenIcon"), { ssr: false })
export const PipIcon = dynamic(() => import("./PipIcon"), { ssr: false })
export const HomeIcon = dynamic(() => import("./HomeIcon"), { ssr: false })
export const FilmIcon = dynamic(() => import("./FilmIcon"), { ssr: false })
export const WatchedIcon = dynamic(() => import("./WatchedIcon"), { ssr: false })
export const XcircleIcon = dynamic(() => import("./XcircleIcon"), { ssr: false })
export const BookIcon = dynamic(() => import("./BookIcon"), { ssr: false })
export const SpeedIcon = dynamic(() => import("./SpeedIcon"), { ssr: false })
export const CaretRightIcon = dynamic(() => import("./CaretRightIcon"), { ssr: false })