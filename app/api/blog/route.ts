import blogService from "@/backend/service/BlogService";
import { NextResponse } from "next/server";
export async function GET() {
    const blog = await blogService.GetAllByBlogType("Phim-anime")
    return NextResponse.json({ ls: blog })
}
