export default function ConvertSecondToTimeC(time: number) {
    const mi = Math.floor(time / 60)
    const se = Math.floor(time % 60)
    return `${mi}:${se < 10 ? `0${se}` : se}`
}