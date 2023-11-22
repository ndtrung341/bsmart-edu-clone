import React from 'react';
import './styles/logo.css';
import { SwiperSlide } from 'swiper/react';
import Section from '~/components/shared/section/Section';
import CustomSwiper from '~/components/shared/swiper/CustomSwiper';

const LogoSwiper: React.FC = () => {
  return (
    <Section className='logo-slide' title='Nhận được sự tin tưởng của các đối tác'>
      <CustomSwiper
        hideNavigation
        autoplay={{ reverseDirection: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        slidesPerGroup={4}
        className='logo'
      >
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <img src={`/logo-dai-hoc-0${index + 1}.webp`}></img>
            </SwiperSlide>
          ))}
      </CustomSwiper>
    </Section>
  );
};

export default LogoSwiper;
