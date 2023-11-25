'use client';

import React from 'react';
import './learning.css';
import { Row, Col, Typography } from 'antd';
import { Section } from '../../Section';

const Learning: React.FC = () => {
  return (
    <Section className="learning-path">
      <Row
        gutter={[
          { md: 16, lg: 0 },
          { md: 16, lg: 0 },
        ]}
      >
        <Col xs={24} lg={12}>
          <div className="left">
            <div className="content">
              <Typography.Title level={2}>Trái ngành</Typography.Title>
              <Typography.Text>From Zero to Hero</Typography.Text>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="right">
            <div className="content">
              <Typography.Title level={2}>ĐÃ BIẾT LẬP TRÌNH </Typography.Title>
              <Typography.Text>Đã có kiến thức tư duy lập trình và OOP</Typography.Text>
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Learning;
