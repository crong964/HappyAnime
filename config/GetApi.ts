export default async function GetApiImp(url: string) {
    const json = await fetch(url, { cache:"force-cache" })
    const data = await json.json()
    return data
}