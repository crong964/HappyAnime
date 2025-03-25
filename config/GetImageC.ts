export default function GetImageC(url: string) {
    if (!url) {
        return ""
    }
    if (url.indexOf("https") >= 0) {
        return url
    }
    return `https://phimimg.com/${url}`
}