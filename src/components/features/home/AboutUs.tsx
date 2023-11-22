import React from 'react';
import './styles/aboutus.css';
import { Flex, Typography, Row, Col, Button } from 'antd';
import Section from '~/components/shared/section/Section';

const AboutUs: React.FC = () => {
  return (
    <Section className='aboutus' title='Về chúng tôi'>
      <Row className='aboutus-content' gutter={[20, 20]}>
        <Col md={24} lg={12}>
          <Typography.Paragraph className='about-description'>
            Về chúng tôi BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về đào tạo
            lập trình viên, kết nối Mentor và Mentee. Với đội ngũ Mentor giàu kinh nghiệm và chuyên
            môn, BSMART cam kết mang đến các khóa học lập trình chất lượng nhất. Hệ thống khóa học
            đa dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể lựa chọn các khóa học
            phù hợp với nhu cầu và khả năng của mình. BSMART cập nhật và áp dụng những công nghệ
            mới, giúp học viên và Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất trong
            lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ trợ học viên trong quá trình học
            tập và phát triển sự nghiệp sau khi tốt nghiệp.
          </Typography.Paragraph>
          <Flex align='center' justify='center' gap={'middle'}>
            <Button className='btn'>Xem khóa học</Button>
            <Button className='btn'>Hỗ trợ tư vấn</Button>
          </Flex>
        </Col>
        <Col md={24} lg={12}>
          <img className='aboutus-banner__img' src='/banner-2.webp' alt='' />
        </Col>
      </Row>
    </Section>
  );
};

export default AboutUs;
