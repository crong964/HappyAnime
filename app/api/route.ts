import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    let mode = process.env.MODE
    let country = req.headers.get("x-vercel-ip-country")
    let f = true
    if (mode == "pro" && country == "VN") {
        f = false
    } else {
        f = true
    }

    if (mode == "dev") {
        f = false
    }
    return NextResponse.json({ err: f })
}