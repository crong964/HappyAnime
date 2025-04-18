import { BookIcon, FilmIcon, HomeIcon, SearchIcon, WatchedIcon } from "@/icon";
import { LinkC } from "@/components/Link";

export default function Navi() {
    return (
        <>
            <LinkC className="flex flex-col items-center" href={'/'}>
                <>
                    <HomeIcon className=""></HomeIcon>
                    <p className="text-sm">Trang chủ</p>
                </>
            </LinkC>
            <LinkC className="flex flex-col items-center" href={'/save'}>
                <>
                    <FilmIcon className=""></FilmIcon>
                    <p className="text-sm">Lưu</p>
                </>
            </LinkC>
            <LinkC className="flex flex-col  items-center" href={'/searchmobile'}>
                <>
                    <SearchIcon className=""></SearchIcon>
                    <p className="text-sm">Tìm kiếm</p>
                </>
            </LinkC>
            <LinkC className="flex flex-col  items-center" href={'/history'}>
                <>
                    <WatchedIcon className=""></WatchedIcon>
                    <p className="text-sm">Xem lại</p>
                </>
            </LinkC>
            <LinkC className="flex flex-col  items-center" href={'/blog'}>
                <>
                    <BookIcon className="size-6 fill-white text-center"></BookIcon>
                    <p className="text-sm">Bài viết</p>
                </>
            </LinkC>
        </>
    )
}