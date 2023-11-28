import './style.css';
import { Flex, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

interface BreadcrumbProps {
  items: { title: string; link?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Flex gap={6} align="center" className="breadcrumb">
      <Link href={'/'} className="breadcrumb__link">
        <Typography.Text className="breadcrumb__text">Trang chủ</Typography.Text>
      </Link>
      &gt;
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link href={item.link} className="breadcrumb__link">
              <Typography.Text className="breadcrumb__text">{item.title}</Typography.Text>
            </Link>
          ) : (
            <Typography.Text className="breadcrumb__text">{item.title}</Typography.Text>
          )}
          {index !== items.length - 1 && <>&gt;</>}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default Breadcrumb;
