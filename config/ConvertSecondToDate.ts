export default function ConvertSecondToDateC(time: number) {
    const d = new Date(time)
       
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}