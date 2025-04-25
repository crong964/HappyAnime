export default function MinMaxString(min: number, max: number, s: string) {
    if (min >= max) {
        return s
    }
    if (s.length < min || s.length < max) {
        return s
    }
    return s.slice(min, max)
}