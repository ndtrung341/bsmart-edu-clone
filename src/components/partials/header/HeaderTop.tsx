import React from 'react';
import './styles/header-top.css';
import { Flex, Form, Input } from 'antd';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Socials from '~/components/shared/Socials';
import Contact from '~/components/shared/Contact';

const HeaderTop: React.FC = () => {
  return (
    <div className='header-top'>
      <div className='container'>
        <Flex className='header-top__wrapper' align='center' justify='space-between'>
          <div className='header-top__social'>
            <Socials />
          </div>

          <div className='header-contact'>
            <Contact />
          </div>
          {/* <Flex className='header-contact' gap={'large'}>
            <Flex align='center'>
              <img src='/icon-gmail.webp' alt='' />
              admin@bsmart.edu.com
            </Flex>
            <Flex align='center'>
              <img src='/icon-phone.webp' alt='' />
              028 9999 79 39
            </Flex>
          </Flex> */}

          <div className='header-search'>
            <Form>
              <Input
                className='search-input'
                placeholder='Tìm kiếm khóa học'
                suffix={<FaSearch size={16} />}
              />
            </Form>
          </div>

          <div className='header-log-reg'>
            <Flex gap={4}>
              <Link to={'/auth/log'}>Đăng nhập</Link>
              <small>|</small>
              <Link to={'/auth/reg'}>Đăng ký</Link>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderTop;
