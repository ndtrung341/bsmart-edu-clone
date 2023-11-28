'use client';

import React from 'react';
import './style.css';
import { Card, Typography } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { Mentor } from '@prisma/client';

interface MentorCardCoverProps {
  link: string;
  banner?: string;
}

const MentorCardCover: React.FC<MentorCardCoverProps> = ({
  link,
  banner = '/Avatar_Mentor/default.jpg',
}) => {
  return (
    <Link href={link}>
      <div className="course-card__banner" style={{ position: 'relative' }}>
        <Image fill src={banner} alt="mentor" />
      </div>
    </Link>
  );
};

export type MentorCardData = Omit<Mentor, 'email'>;

const MentorCard: React.FC<{ data: MentorCardData }> = (props) => {
  const { data } = props;
  return (
    <Card
      className="mentor-card"
      style={{ boxShadow: '0 0 8px 0 #bcb8b8', border: '1px solid #c1c1c1' }}
      bodyStyle={{ border: '1px solid #c1c1c1' }}
      cover={<MentorCardCover banner={undefined && data.image} link="#" />}
    >
      <Card.Meta
        title={
          <Link href={'#'}>
            <Typography.Title level={4} className="mentor-card__title">
              {data.name}
            </Typography.Title>
          </Link>
        }
      />

      <Typography.Paragraph className="course-card__description">
        <p>{data.bio}</p>
      </Typography.Paragraph>
    </Card>
  );
};

export default MentorCard;
