export default async function GetApiImpC(url: string) {
    
    
    try {
        const json = await fetch(url, { cache: "force-cache" })
        const data = await json.json()
        return data
    } catch (error) {
        return {}
    } 
}