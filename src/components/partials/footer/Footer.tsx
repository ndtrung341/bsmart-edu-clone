import React from 'react';
import './style.css';
import { Row, Col, Typography } from 'antd';
import Logo from '~/components/shared/Logo';
import Socials from '~/components/shared/Socials';
import { NAVS } from '~/constant';
import { Link } from 'react-router-dom';
import Contact from '~/components/shared/Contact';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Row gutter={[36, 36]}>
          <Col xs={24} md={12} lg={8} className='footer-logo'>
            <Logo type='dark' />
            <Typography.Paragraph className='footer-description'>
              Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ năng lập trình của
              bạn. Tất cả các mentor của chúng tôi đều có nhiều kinh nghiệm trong thực tế và giảng
              dạy.
            </Typography.Paragraph>
            <Typography.Title level={5}>Theo dõi chúng tôi tại:</Typography.Title>
            <div className='footer-social'>
              <Socials />
            </div>
          </Col>
          <Col xs={24} md={12} lg={4} className='footer-menu'>
            <Typography.Title level={4}>Menu</Typography.Title>
            <ul>
              {NAVS.map((item) => (
                <li>
                  <Link key={item.key} to={item.url}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={12} lg={4} className='footer-menu'>
            <Typography.Title level={4}>Điều khoản</Typography.Title>
            <ul>
              <li>
                <Link to='/privacy-policy'>Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to='/termsofservice'>Điều khoản bảo mật</Link>
              </li>
            </ul>

            <Typography.Title style={{ marginTop: 36 }} level={4}>
              Cộng tác viên
            </Typography.Title>
            <ul>
              <li>
                <Link to='#'>Đăng kí cộng tác viên</Link>
              </li>
              <li>
                <Link to='#'>Đăng ký mentor</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} md={12} lg={8} className='footer-contact'>
            <Typography.Title level={4}>Liên hệ với chúng tôi</Typography.Title>
            <Contact vertical />
          </Col>
        </Row>
      </div>
      <hr
        style={{
          margin: '36px 0'
        }}
      />
      <div className='container'>
        <p style={{ textAlign: 'center', color: '#fff' }}>
          © Bản quyền <Link to={'/'}>BSmart</Link> 2023 - Empowered by BSmart - version 1.1.13
        </p>
      </div>
    </footer>
  );
};

export default Footer;
