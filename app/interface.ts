interface Req {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ slug: string }>
}