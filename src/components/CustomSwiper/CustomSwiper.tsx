'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

interface CustomSwiperProps<T> extends SwiperProps {
  hideNavigation?: boolean;
  items: T[];
  slideEl: React.ComponentType<{ data: T }>;
}

const CustomSwiper = <T,>({
  items,
  slideEl: Comp,
  className = 'default',
  hideNavigation = false,
  ...swiperProps
}: CustomSwiperProps<T>) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`custom-swiper ${className}`} ref={containerRef}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        pagination={{
          el: `.${className} > .custom-swiper__pagination`,
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...swiperProps}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {React.createElement(Comp, { data: item })}
            {/* <Comp data={item} /> */}
          </SwiperSlide>
        ))}
        {/* {children} */}
      </Swiper>
      {!hideNavigation && (
        <React.Fragment>
          <div
            onClick={() => swiperRef?.current?.slidePrev()}
            className="custom-swiper__control custom-swiper__control--left"
          >
            <FaChevronLeft />
          </div>
          <div
            onClick={() => swiperRef?.current?.slideNext()}
            className="custom-swiper__control custom-swiper__control--right"
          >
            <FaChevronRight />
          </div>
        </React.Fragment>
      )}
      <div className="custom-swiper__pagination"></div>
    </div>
  );
};

export default CustomSwiper;
