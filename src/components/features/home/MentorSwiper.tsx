import React from 'react';
import { SwiperSlide } from 'swiper/react';
import MentorCard, { MentorCardData } from '~/components/shared/mentor-card/MentorCard';
import CustomSwiper from '~/components/shared/swiper/CustomSwiper';

interface MentorSwiperProps {
  data: MentorCardData[];
  className?: string;
}

const MentorSwiper: React.FC<MentorSwiperProps> = ({ data, className }) => {
  return (
    <CustomSwiper className={className}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <MentorCard data={item} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default MentorSwiper;
