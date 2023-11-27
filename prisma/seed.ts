import { COURSE_LEVEL } from "@prisma/client";
import prisma from "../src/lib/prisma";
import { courses } from "../data/courses";
import { mentors } from "../data/mentors";
import slugify from "slugify";

async function main() {
   await prisma.module.deleteMany();
   await prisma.lecture.deleteMany();
   await prisma.course.deleteMany();
   await prisma.category.deleteMany();
   await prisma.mentor.deleteMany();

   for (const c of courses) {
      const mentorIndex = mentors.findIndex(m => m.name.includes(c.mentor.name));
      const catSlug = slugify(c.category, { lower: true });
      const courseSlug = slugify(c.title, { lower: true });
      const course = await prisma.course.create({
         data: {
            title: c.title,
            slug: courseSlug,
            thumbnail: c.thumbnail,
            description: c.description,
            price: c.price,
            rating: c.rating,
            courseLevel: c.level as COURSE_LEVEL,
            category: {
               connectOrCreate: {
                  where: {
                     slug: catSlug
                  }, create: {
                     title: c.category,
                     slug: catSlug
                  }
               }
            },
            mentor: {
               connectOrCreate: {
                  where: {
                     email: `test${mentorIndex}@gmail.com`
                  }, create: {
                     name: mentors[mentorIndex].name,
                     image: null,
                     email: `test${mentorIndex}@gmail.com`,
                     bio: mentors[mentorIndex].bio,
                  }
               }
            },
         }, include: {
            category: true,
            mentor: true
         }
      })

      for (const m of c.courseContent) {
         await prisma.module.create({
            data: {
               title: m.title,
               order: m.order,
               lectures: {
                  createMany: {
                     data: m.lectures.map(l => ({ title: l.title, order: l.order }))
                  }
               },
               courseId: course.id
            }, include: {
               lectures: true
            }
         })
      }
   }

}

main()
   .then(async () => {
      await prisma.$disconnect()
   })
   .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
   })