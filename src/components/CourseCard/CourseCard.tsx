import React from 'react';
import './style.css';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import { Avatar, Card, Typography, Flex, Rate, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import CourseLevel from './CourseLevel';
import { Course, Mentor } from '@prisma/client';
interface CourseCardCoverProps {
  link: string;
  banner?: string;
  mentorAvatar?: string;
}

const CourseCardCover: React.FC<CourseCardCoverProps> = ({
  link,
  banner = '/t-com_netcore_770px.png',
  mentorAvatar = '/Avatar_Mentor/default.jpg',
}) => {
  return (
    <Link href={link}>
      <div className="course-card__banner">
        <Image src={banner} fill alt="banner" />
        <div className="course-mentor__avatar">
          <Avatar shape="square" size={64} src={mentorAvatar} />
        </div>
      </div>
    </Link>
  );
};

export type CourseCardData = Omit<Course, 'category'> & {
  mentor: Omit<Mentor, 'email' | 'bio'>;
};

const CourseCard: React.FC<{ data: CourseCardData }> = (props) => {
  const { data } = props;

  return (
    <Card
      className="course-card"
      style={{ boxShadow: '0 0 8px 0 #bcb8b8', border: '1px solid #c1c1c1' }}
      bodyStyle={{ border: '1px solid #c1c1c1' }}
      cover={
        <CourseCardCover
          banner={data.thumbnail ?? undefined}
          link={data.slug}
          mentorAvatar={data.mentor.image ?? undefined}
        />
      }
      actions={[
        <Link key={'#'} href={data.slug}>
          <Button className="btn course-card__btn">Xem chi tiết</Button>
        </Link>,
      ]}
    >
      <Card.Meta
        title={
          <Link href={data.slug}>
            <Typography.Title level={4} className="course-card__title">
              {data.title}
            </Typography.Title>
          </Link>
        }
      />

      <Link href={data.slug} className="course-card__mentor">
        <Flex>
          <Typography.Text>Mentor &nbsp;</Typography.Text>
          <Typography.Text>{data.mentor.name}</Typography.Text>
        </Flex>
      </Link>

      <Flex align="center">
        <FaUser />
        <Typography.Text style={{ fontSize: '1rem' }} italic={true} strong={true}>
          &nbsp; {data.students} Học viên
        </Typography.Text>
      </Flex>

      <Typography.Paragraph className="course-card__description">
        <p>{data.description}</p>
      </Typography.Paragraph>

      <div>
        <Rate disabled defaultValue={5} className="course-card__rating" />
      </div>

      <Flex align="center" gap={'small'}>
        <Typography.Text className="course-card__price">
          {Intl.NumberFormat('vi-VN', { maximumFractionDigits: 3 }).format(data.price || 0)}VND
        </Typography.Text>
        <Flex align="center">
          <FaRegCalendarAlt />
          <Typography.Text style={{ fontSize: '1rem' }} italic={true} strong={true}>
            &nbsp; 15 Buổi học
          </Typography.Text>
        </Flex>
      </Flex>

      <div className="course-card__type">
        <CourseLevel level={data.courseLevel} />
      </div>
    </Card>
  );
};

export default CourseCard;
