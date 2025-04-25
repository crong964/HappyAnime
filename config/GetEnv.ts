export const domain = process.env.DOMAIN
export const revalidate = parseInt(process.env.REVALIDATE || "8 * 3600")
export const pathimage = process.env.PATHIMGBLOG || "/"
export const title = process.env.TITLE || "/"
export const kw = process.env.KEYWORD || "/"
export const des = process.env.DESCRIPTION || "/"