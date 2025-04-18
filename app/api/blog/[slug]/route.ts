import blogService from "@/backend/service/BlogService";
import { NextResponse } from "next/server";
export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
   
    
    const blog = await blogService.GetBlogById(slug)
    return NextResponse.json({ d: blog })
}
