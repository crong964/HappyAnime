import { Icon } from "./interface";


export default function Home(i: Icon) {
    return <i className={`${i.className} text-2xl  hover:text-[#F3D68D] bi bi-house`}></i>
}