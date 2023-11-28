import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getCourseDetailsBySlug(slug: string) {
   const data = await prisma.course.findUnique({
      where: { slug: '/course/' + slug }, include: {
         mentor: true,
         category: true,
         modules: {
            orderBy: { order: 'asc' },
            include: { lectures: { orderBy: { order: 'asc' } } }
         }
      }
   });
   return data
}
// export type CourseDetails = Prisma.PromiseReturnType<typeof getCourseDetailsBySlug>
export type CourseDetails = Awaited<ReturnType<typeof getCourseDetailsBySlug>>