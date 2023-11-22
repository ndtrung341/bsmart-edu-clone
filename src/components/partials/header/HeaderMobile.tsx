import React, { useState } from 'react';
import './styles/header-mobile.css';
import { Flex, Drawer, Badge, Menu, MenuProps, Form, Input } from 'antd';
import Logo from '~/components/shared/Logo';
import { FaBars, FaTimes, FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NAVS } from '~/constant';
import Socials from '~/components/shared/Socials';
import Contact from '~/components/shared/Contact';

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = NAVS.map((item) => {
  return {
    key: item.key,
    label: <Link to={item.url}>{item.label}</Link>,
    children: item.children
      ? item.children.map((child) => ({
          key: child.key,
          label: <Link to={child.url}>{child.label}</Link>
        }))
      : undefined
  };
});

const HeaderMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='header-mobile'>
        <div className='container'>
          <Flex className='header-mobile__wrapper' justify='space-between' align='stretch'>
            <div className=''>
              <Logo />
            </div>
            <Flex align='center' onClick={showDrawer}>
              <FaBars size={24} />
            </Flex>
          </Flex>
        </div>
      </div>

      {/* SIDEBAR */}
      <Drawer closable={false} placement='right' onClose={onClose} open={open}>
        <Flex className='sidebar-top' align='center' justify='space-between'>
          <Logo type='mobile' />
          <FaTimes size={16} onClick={onClose} />
        </Flex>

        <Flex className='header-cart'>
          <Link to={'/cart'}>
            <Badge color='var(--primary-color)' count={5} offset={[0, 20]}>
              <img src='/icon-shopping-cart.webp' alt='Giỏ hàng' />
            </Badge>
          </Link>
        </Flex>

        <Menu
          className='sidebar-center'
          mode='inline'
          items={menuItems}
          expandIcon={(prop) => (prop.isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />)}
        />

        <Flex vertical className='sidebar-bottom'>
          <Form className='sidebar-search'>
            <Input
              className='search-input'
              placeholder='Tìm kiếm khóa học'
              suffix={<FaSearch size={16} />}
            />
          </Form>

          <div className='sidebar-contact'>
            <Contact vertical />
          </div>

          <div className='sidebar-social'>
            <Socials />
          </div>

          <Flex className='sidebar-controls' gap={4}>
            <Link to={'/auth/log'}>Đăng nhập</Link>
            <small>|</small>
            <Link to={'/auth/reg'}>Đăng ký</Link>
          </Flex>
        </Flex>
      </Drawer>
    </React.Fragment>
  );
};

export default HeaderMobile;
