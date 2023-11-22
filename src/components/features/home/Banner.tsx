import React from 'react';
import './styles/banner.css';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <section className='banner'>
      <Typography className='banner-content'>
        <Typography.Title level={4}>Khởi đầu sự nghiệp của bạn</Typography.Title>
        <Typography.Title level={2}>
          Trở thành lập trình viên chuyên nghiệp tại BSMART
        </Typography.Title>
        <Typography.Paragraph>
          Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa học chất lượng. BSMART
          sẽ giúp các bạn có định hướng về nghề nghiệp và phát triển bản thân trên con đường trở
          thành lập trình viên chuyên nghiệp
        </Typography.Paragraph>

        <div className='banner-control'>
          <Link to={'/course'}>
            <Button className='btn'>Xem khóa học</Button>
          </Link>
        </div>
      </Typography>
    </section>
  );
};

export default Banner;
