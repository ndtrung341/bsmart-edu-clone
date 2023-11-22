import React from 'react';
import { SwiperSlide } from 'swiper/react';
import CourseCard, { CourseCardData } from '~/components/shared/course-card/CourseCard';
import CustomSwiper from '~/components/shared/swiper/CustomSwiper';

interface CourseSwiperProps {
  data: CourseCardData[];
  className?: string;
}

const CourseSwiper: React.FC<CourseSwiperProps> = ({ data, className }) => {
  return (
    <CustomSwiper className={className}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <CourseCard data={item} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default CourseSwiper;
