import { GetImage } from "@/config";
import { iBanner } from "./interface";

export default function Banner(p: iBanner) {
    return (
        <div title={p.name} style={{ backgroundImage: `linear-gradient(to right,rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)),url('${GetImage(p.thumb_url)}')` }}
            className={`w-full h-[200px] sm:h-[500px] sm:bg-center bg-cover bg-no-repeat ${p.className}`}>
            {p.children}
        </div>
    )
}