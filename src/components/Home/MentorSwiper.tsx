'use client';

import React from 'react';
import { SwiperSlide } from 'swiper/react';
import MentorCard, { MentorCardData } from '../MentorCard/MentorCard';
import CustomSwiper from '../CustomSwiper/CustomSwiper';
import { Section } from '../Section';

interface MentorSwiperProps {
  data: MentorCardData[];
  className?: string;
}

const MentorSwiper: React.FC<MentorSwiperProps> = ({ data, className }) => {
  return (
    <Section title={'Mentor tiêu biểu'}>
      <CustomSwiper className={className} items={data} slideEl={MentorCard} />;
    </Section>
  );
};

export default MentorSwiper;
