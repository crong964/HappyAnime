import { Icon } from "./interface";

export default function BookIcon(p: Icon) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={p.className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 5C3 4.44772 3.44772 4 4 4H10C11.1046 4 12 4.89543 12 6V20C12 18.8954 11.1046 18 10 18H4C3.44772 18 3 17.5523 3 17V5Z"
                stroke="black"
                strokeWidth="2"
            />
            <path
                d="M21 5C21 4.44772 20.5523 4 20 4H14C12.8954 4 12 4.89543 12 6V20C12 18.8954 12.8954 18 14 18H20C20.5523 18 21 17.5523 21 17V5Z"
                stroke="black"
                strokeWidth="2"
            />
        </svg>


    );
}