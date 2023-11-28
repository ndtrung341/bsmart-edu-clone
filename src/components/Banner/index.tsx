import { Flex, Typography } from 'antd';
import React from 'react';
import './style.css';

interface BannerProps {
  title: string;
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  return (
    <div className="banner2">
      <Flex vertical align="center" className="banner2__wrapper">
        <Typography.Title level={1} className="banner2__title">
          {title}
        </Typography.Title>
        <div className="banner2__content">{children}</div>
      </Flex>
    </div>
  );
};

export default Banner;
