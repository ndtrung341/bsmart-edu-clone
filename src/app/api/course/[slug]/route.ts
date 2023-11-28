import prisma from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
   const courses = await prisma.course.findUnique({
      where: { slug: '/course/' + params.slug }, include: {
         mentor: true,
         modules: {
            include: { lectures: true }
         }
      }
   });
   return NextResponse.json(courses);
}