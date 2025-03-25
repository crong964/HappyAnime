export default async function GetApiImpC(url: string) {
    const json = await fetch(url, { cache:"force-cache" })
    const data = await json.json()
    return data
}