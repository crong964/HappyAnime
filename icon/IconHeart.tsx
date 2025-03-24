import { Icon } from "./interface";


export default function Heart(i: Icon) {
    return <i className={`${i.className} text-2xl  hover:text-[#F3D68D] bi bi-heart-fill`}></i>
}