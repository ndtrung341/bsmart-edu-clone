import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Card, Typography } from 'antd';
import { Mentor } from '~/types';

interface MentorCardCoverProps {
  link: string;
  banner?: string;
}

const MentorCardCover: React.FC<MentorCardCoverProps> = ({
  link,
  banner = '/Avatar_Mentor/default.jpg'
}) => {
  return (
    <Link to={link}>
      <div className='course-card__banner'>
        <img src={banner} />
      </div>
    </Link>
  );
};

export type MentorCardData = Partial<Omit<Mentor, 'email'>>;

const MentorCard: React.FC<{ data: MentorCardData }> = (props) => {
  const { data } = props;
  return (
    <Card
      className='mentor-card'
      style={{ boxShadow: '0 0 8px 0 #bcb8b8', border: '1px solid #c1c1c1' }}
      bodyStyle={{ border: '1px solid #c1c1c1' }}
      cover={<MentorCardCover banner={undefined && data.avatarUrl} link='#' />}
    >
      <Card.Meta
        title={
          <Link to={'#'}>
            <Typography.Title level={4} className='mentor-card__title'>
              {data.name}
            </Typography.Title>
          </Link>
        }
      />

      <Typography.Paragraph className='course-card__description'>
        <p>{data.bio}</p>
      </Typography.Paragraph>
    </Card>
  );
};

export default MentorCard;
