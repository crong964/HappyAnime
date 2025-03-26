import { CardMovie } from ".";
import { iCardMovies } from "./interface";

export default function CardMovies(p: iCardMovies) {
    return <div className=" flex flex-wrap md:grid md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:gap-2 ">
        {p.ls.map((v) => {
            return <CardMovie key={v._id} {...v} />
        })}
    </div>
}