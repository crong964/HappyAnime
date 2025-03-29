import { CardMovie } from ".";
import { iCardMovies } from "./interface";

export default function CardMovies(p: iCardMovies) {
    return (
        <div className=" flex justify-center">
            <div className="w-full lg:w-[80%]">
                <div className=" flex flex-wrap">
                    {p.ls.map((v) => {
                        return <CardMovie key={v._id} {...v} />
                    })}
                </div>
            </div>
        </div>
    )
}