import React, { useRef } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

interface CustomSwiperProps extends SwiperProps {
  hideNavigation?: boolean;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  hideNavigation = false,
  className = 'default',
  ...swiperProps
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`custom-swiper ${className}`} ref={containerRef}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        pagination={{
          el: `.${className} > .custom-swiper__pagination`,
          clickable: true
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...swiperProps}
      >
        {children}
      </Swiper>
      {!hideNavigation && (
        <React.Fragment>
          <div
            onClick={() => swiperRef?.current?.slidePrev()}
            className='custom-swiper__control custom-swiper__control--left'
          >
            <FaChevronLeft />
          </div>
          <div
            onClick={() => swiperRef?.current?.slideNext()}
            className='custom-swiper__control custom-swiper__control--right'
          >
            <FaChevronRight />
          </div>
        </React.Fragment>
      )}
      <div className='custom-swiper__pagination'></div>
    </div>
  );
};

export default CustomSwiper;
