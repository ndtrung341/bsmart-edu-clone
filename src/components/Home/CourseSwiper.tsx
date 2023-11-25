'use client';

import React from 'react';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import { CourseCard, CourseCardData } from '../CourseCard';
import { Section } from '../Section';

interface CourseSwiperProps {
  data: CourseCardData[];
  className?: string;
}

const CourseSwiper: React.FC<CourseSwiperProps> = ({ data, className }) => {
  return (
    <Section title={'Khóa học tiêu biểu'}>
      <CustomSwiper className={className} items={data} slideEl={CourseCard} />
    </Section>
  );
};

export default CourseSwiper;
