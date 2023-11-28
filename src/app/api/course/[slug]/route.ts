import { getCourseDetailsBySlug } from "@/src/services/course";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
   const courses = await getCourseDetailsBySlug(params.slug);
   return NextResponse.json(courses);
}



