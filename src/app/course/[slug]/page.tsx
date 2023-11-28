'use client';

import Banner from '@/src/components/Banner';
import Breadcrumb from '@/src/components/Breadcrumb';
import axiosClient from '@/src/lib/axiosClient';
import { Course } from '@prisma/client';
import useSWR from 'swr';

const getCourse = async (slug: string) => {
  const { data } = await axiosClient.get<Course>('/course/' + slug);
  return data;
};

const CoursePage = ({ params }: { params: { slug: string } }) => {
  const { data: course } = useSWR(params.slug, getCourse);
  if (!course) return;
  return (
    <div>
      <Banner title={course.title}>
        <Breadcrumb items={[{ title: 'Khóa học', link: '/course' }, { title: course.title }]} />
      </Banner>
    </div>
  );
};

export default CoursePage;
