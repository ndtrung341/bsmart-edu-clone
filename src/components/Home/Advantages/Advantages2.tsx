'use client';

import React from 'react';
import './advantage2.css';

import { Button, Flex, Typography } from 'antd';
import { Section } from '../../Section';
import Link from 'next/link';

const Advantages2: React.FC = () => {
  return (
    <Section className="advantages2">
      <Typography.Paragraph className="advantages2-content">
        <Typography.Title level={4}>Định hướng và Chuẩn hoá lộ trình học tập</Typography.Title>
        <Typography.Title level={2}>Học Thật, Dự Án Thật, Mentor Tận Tâm</Typography.Title>
        <Flex align="center" justify="center" gap={'middle'}>
          <Link href={'/course'}>
            <Button className="btn btn-primary"> Danh sách khóa học</Button>
          </Link>
          <Link href={'#'}>
            <Button className="btn btn-outlined">Tư vấn lộ trình</Button>
          </Link>
        </Flex>
      </Typography.Paragraph>
    </Section>
  );
};

export default Advantages2;
