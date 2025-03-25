import { Icon } from "./interface";


export default function PipIcon(i: Icon) {
    return <i className={`${i.className} text-2xl  hover:text-[#F3D68D] bi bi-pip-fill`}></i>
}