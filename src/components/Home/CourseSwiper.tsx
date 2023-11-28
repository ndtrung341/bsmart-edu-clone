'use client';

import React from 'react';
import CustomSwiper from '../CustomSwiper/CustomSwiper';

import { Section } from '../Section';
import { CourseCard, CourseCardData } from '../Course';

interface CourseSwiperProps {
  data: CourseCardData[] | undefined;
  className?: string;
}

const CourseSwiper: React.FC<CourseSwiperProps> = ({ data = [], className }) => {
  return (
    <Section title={'Khóa học tiêu biểu'}>
      <CustomSwiper className={className} items={data} slideEl={CourseCard} />
    </Section>
  );
};

export default CourseSwiper;
