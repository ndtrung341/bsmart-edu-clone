import React from 'react';
import './styles/advantage.css';

import Section from '~/components/shared/section/Section';
import { FaRegCheckCircle, FaCogs, FaGripfire, FaUsers, FaQrcode, FaTrophy } from 'react-icons/fa';
import { Row, Col, Flex, Typography } from 'antd';

const advantages: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    icon: <FaRegCheckCircle />,
    title: 'Học theo lộ trình, có định hướng',
    description:
      'BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.'
  },
  {
    icon: <FaCogs />,
    title: 'Nền tảng cốt lõi trong lập trình',
    description:
      'BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.'
  },
  {
    icon: <FaGripfire />,
    title: 'Mài giũa bạn qua thực tế',
    description:
      'Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.'
  },
  {
    icon: <FaUsers />,
    title: 'Mentor tận tâm',
    description:
      'Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.'
  },
  {
    icon: <FaQrcode />,
    title: 'Công nghệ mới, thực tế',
    description:
      'Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.'
  },
  {
    icon: <FaTrophy />,
    title: 'Trao tay chìa khóa thành công',
    description:
      'Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.'
  }
];

const Advantages: React.FC = () => {
  return (
    <Section className='advantages' title='Điểm ưu việt tại BSmart'>
      <Row className='aboutus-content' gutter={18}>
        {advantages.map((item, index) => (
          <Col md={24} lg={8} key={index} className='advantage'>
            <Flex align='center' gap={'small'}>
              <div className='advantage-icon'>{item.icon}</div>
              <Typography.Title className='advatange-title' level={4}>
                {item.title}
              </Typography.Title>
            </Flex>
            <Typography.Paragraph className='advatange-description'>
              {item.description}
            </Typography.Paragraph>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Advantages;
