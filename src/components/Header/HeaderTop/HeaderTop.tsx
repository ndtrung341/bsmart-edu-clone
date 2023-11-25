import React from 'react';
import './header_top.css';
import { Flex, Form, Input } from 'antd';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import SocialShares from '@/src/components/SocialShares';
import ContactInfo from '@/src/components/ContactInfo';

const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <div className="container">
        <Flex className="header-top__wrapper" align="center" justify="space-between">
          <div className="header-top__social">
            <SocialShares />
          </div>

          <div className="header-contact">
            <ContactInfo />
          </div>

          <div className="header-search">
            <Form>
              <Input
                className="search-input"
                placeholder="Tìm kiếm khóa học"
                suffix={<FaSearch size={16} />}
              />
            </Form>
          </div>

          <div className="header-log-reg">
            <Flex gap={4}>
              <Link href={'/auth/log'}>Đăng nhập</Link>
              <small>|</small>
              <Link href={'/auth/reg'}>Đăng ký</Link>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderTop;
