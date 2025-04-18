export default function Image(props: React.ComponentProps<"img">) {
    return <img {...props} src={`https://funnytoeic.vercel.app${props.src}`} />
}
