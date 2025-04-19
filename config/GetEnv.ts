export const domain = process.env.DOMAIN
export const revalidate = parseInt(process.env.REVALIDATE || "8 * 3600")
export const pathimage = process.env.PATHIMGBLOG || "/"