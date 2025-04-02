import { Icon } from "./interface";


export default function Xcircle(i: Icon) {
    return <i className={`${i.className} bi bi-x-circle-fill hover:text-pink-700 cursor-pointer`}></i>
}