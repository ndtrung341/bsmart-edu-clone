'use client';
import React from 'react';
import './logo.css';
import { Section } from '../../Section';
import Image from 'next/image';
import CustomSwiper from '../../CustomSwiper/CustomSwiper';

const LogoSwiper: React.FC = () => {
  return (
    <Section className="logo-slide" title="Nhận được sự tin tưởng của các đối tác">
      <CustomSwiper
        hideNavigation
        items={Array(7)
          .fill(0)
          .map((_, index) => `/logo-dai-hoc-0${index + 1}.webp`)}
        slideEl={({ data }) => (
          <div className="logo-side__img" style={{}}>
            <Image fill src={data} alt=""></Image>
          </div>
        )}
        autoplay={{ reverseDirection: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        slidesPerGroup={4}
        className="logo"
      />
    </Section>
  );
};

export default LogoSwiper;
