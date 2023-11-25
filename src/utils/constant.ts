import { removeAccents, slugify } from "./string"

export const COURSE_CATES = [
   'Back-End',
   'Front-End',
   'Database',
   'Cấp Tốc',
   'Other',
   'STEM'
]

export const NAVS = [
   {
      key: 'home',
      label: 'Trang Chủ',
      url: '/',
   },
   {
      key: 'aboutus',
      label: 'Về Chúng Tôi',
      url: '/aboutus',
      children: [
         {
            key: 'aboutus-child-1',
            label: 'Câu chuyện Founder',
            url: '/aboutus',
         },
         {
            key: 'aboutus-child-2',
            label: 'LMS',
            url: '/lms',
         }
      ]
   },
   {
      key: 'stem',
      label: 'Khóa Học STEM',
      url: '/stem',
   },
   {
      key: 'course',
      label: 'Khóa Học',
      url: '/course',
      children: COURSE_CATES.map(item => ({
         key: `course-${item}`,
         label: item,
         url: '/' + slugify(removeAccents(item))
      }))
   },
   {
      key: 'mentor',
      label: 'Mentor',
      url: '/mentor',
   },
   {
      key: 'blog',
      label: 'Blog',
      url: '/blog',
   },
]