'use client';

import Banner from '@/src/components/Banner';
import Breadcrumb from '@/src/components/Breadcrumb';
import { CourseCardData, CourseDetails as CourseDetailsComp } from '@/src/components/Course';
import CourseSwiper from '@/src/components/Home/CourseSwiper';
import axiosClient from '@/src/lib/axiosClient';
import { CourseDetails } from '@/src/services/course';
import useSWR from 'swr';

const getCourse = async (slug: string) => {
  const { data } = await axiosClient.get<CourseDetails>('/course/' + slug);
  return data;
};

const getBestCourses = async (url: string) => {
  const { data } = await axiosClient.get<CourseCardData[]>(url);
  return data;
};

const CoursePage = ({ params }: { params: { slug: string } }) => {
  const { data: course } = useSWR(params.slug, getCourse);

  const { data: courses } = useSWR('/course/best', getBestCourses);
  if (!course) return;

  return (
    <div style={{ background: '#fff' }}>
      <Banner title={course.title}>
        <Breadcrumb items={[{ title: 'Khóa học', link: '/course' }, { title: course.title }]} />
      </Banner>

      <div className="container">
        <CourseDetailsComp data={course} />

        <CourseSwiper data={courses} />
      </div>
    </div>
  );
};

export default CoursePage;
