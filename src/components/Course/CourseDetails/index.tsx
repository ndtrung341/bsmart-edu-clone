'use client';

import React, { useMemo } from 'react';
import './style.css';
import { Avatar, Button, Card, Col, Divider, Flex, List, Rate, Row, Space, Typography } from 'antd';
import { CourseDetails } from '@/src/services/course';
import { CourseLevel } from '..';
import Link from 'next/link';
import Image from 'next/image';
import { FaTrophy, FaInfinity, FaFilm } from 'react-icons/fa';
import { fail } from 'assert';

interface CourseDetailsProps {
  data: CourseDetails;
}
// 42 giờ video theo yêu cầu
// 270 videos hướng dẫn
// 01 tài liệu hướng dẫn theo từng video
// Quyền truy cập đầy đủ suốt đời
// Truy cập trên thiết bị di động và TV

const CourseDetails: React.FC<CourseDetailsProps> = ({ data }) => {
  const itemList = useMemo(
    () => [
      {
        title: `${data?.modules.reduce(
          (acc, val) => (acc += val.lectures.length),
          0,
        )} videos hướng dẫn`,
        icon: <FaFilm />,
      },
      { title: 'Quyền truy cập đầy đủ suốt đời', icon: <FaInfinity /> },
      { title: 'Giấy chứng nhận hoàn thành', icon: <FaTrophy /> },
    ],
    [data?.modules],
  );
  return (
    <Row gutter={[24, 24]} style={{ paddingBlock: 70 }}>
      <Col span={24} order={2} md={{ span: 16, order: 1 }}>
        <Flex justify="space-between" align="center">
          {/* Mentor avatar and name */}
          <Flex align="center" gap={'small'}>
            <Avatar size={'large'} src={data?.mentor.image ?? '/Avatar_Mentor/default.jpg'} />
            <Typography.Paragraph style={{ margin: 0, fontSize: '1.1rem' }}>
              Bởi&nbsp;
              <Typography.Text strong style={{ margin: 0, fontSize: '1.1rem' }}>
                Mentor {data?.mentor.name}
              </Typography.Text>
            </Typography.Paragraph>
          </Flex>
          {/* Rating and reviews count */}
          <Flex align="center" gap={'small'}>
            <Rate
              disabled
              defaultValue={0}
              allowHalf
              value={data!.rating as number}
              className="course-card__rating"
            />
            <Typography.Text style={{ fontWeight: '500' }}>(6 đánh giá)</Typography.Text>
          </Flex>
        </Flex>

        <Row gutter={16} align={'middle'} style={{ marginTop: 16 }}>
          <Col span={9}>
            <Flex align="center" gap={'small'}>
              <Typography.Text style={{ fontSize: '1rem' }}>Lĩnh vực:</Typography.Text>
              <Link href={data!.category.slug}>
                <Typography.Text
                  style={{ fontSize: '1rem', padding: 4, background: '#ccc', borderRadius: 4 }}
                >
                  {data?.category.title}
                </Typography.Text>
              </Link>
            </Flex>
          </Col>
          <Col span={9}>
            <Flex align="center" gap={4}>
              <Typography.Text style={{ fontSize: '1rem' }}>Cấp độ:</Typography.Text>
              <Typography.Text style={{ fontSize: '1rem' }}>
                {data?.courseLevel === 'EASY'
                  ? 'Dễ'
                  : data?.courseLevel === 'NORMAL'
                    ? 'Trung bình'
                    : 'Khó'}
              </Typography.Text>
              <CourseLevel level={data?.courseLevel} />
            </Flex>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgb(193, 193, 193)', marginBlock: '1.2rem' }} />

        <div>
          <Typography.Title level={3}>Mô tả khóa học</Typography.Title>
          <Typography.Text style={{ fontSize: '1rem' }}>{data?.description}</Typography.Text>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <Typography.Title level={3}>Nội dung khóa học</Typography.Title>
          {data?.modules.map((m, index) => (
            <React.Fragment key={m.id}>
              <Typography.Title level={4} italic style={{ fontSize: '1.2rem' }}>
                Chapter {index + 1}: {m.title}
              </Typography.Title>
              {m.lectures.map((l, index) => (
                <Typography.Paragraph
                  key={l.id}
                  style={{ paddingInline: '1rem', fontSize: '1rem' }}
                >
                  <p>
                    #{index + 1}. {l.title}
                  </p>
                </Typography.Paragraph>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Col>

      <Col span={24} order={1} md={{ order: 2, span: 8 }}>
        <Card
          className="course__left"
          cover={
            <div style={{ width: '100%', height: '200px', position: 'relative' }}>
              <Image
                src={data?.thumbnail as string}
                alt={data!.title}
                fill
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          }
        >
          <Typography.Paragraph>
            <Typography.Text
              style={{
                color: ' #cb1c22',
                lineHeight: 1.2,
                letterSpacing: '-.02rem',
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              {new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 3 }).format(
                data!.price as number,
              )}
              &nbsp;₫
            </Typography.Text>
          </Typography.Paragraph>
          <div>
            <Button className="btn" style={{ width: '100%' }}>
              Mua ngay
            </Button>
          </div>
          <div style={{ marginTop: 16 }}>
            <Typography.Title level={5} style={{ fontSize: 18 }}>
              Khóa học này bao gồm:
            </Typography.Title>
            <ul>
              {itemList.map((item, index) => (
                <li key={index} style={{ fontSize: 16, marginBlock: 2 }}>
                  <Flex gap={'middle'} align="center">
                    {item.icon}
                    <Typography.Text style={{ fontSize: 16 }}>{item.title}</Typography.Text>
                  </Flex>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default CourseDetails;
