export default async function GetApiImpC(url: string, time = 3600 * 24) {


    try {
        const json = await fetch(url, { next: { revalidate: time } })
        const data = await json.json()
        return data
    } catch (error) {
        return {}
    }
}