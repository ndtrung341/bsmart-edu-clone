import prisma from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
   const mentors = await prisma.mentor.findMany();
   return NextResponse.json(mentors);
}