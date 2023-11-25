import React, { useState } from 'react';
import './header_mobile.css';
import { Flex, Drawer, Badge, Menu, MenuProps, Form, Input } from 'antd';
import { FaBars, FaTimes, FaPlus, FaMinus, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Logo from '@/src/components/Logo';
import ContactInfo from '@/src/components/ContactInfo';
import SocialShares from '@/src/components/SocialShares';
import Image from 'next/image';
import { NAVS } from '@/src/utils/constant';
import ButtonCart from '../../ButtonCart';

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = NAVS.map((item) => {
  return {
    key: item.key,
    label: <Link href={item.url}>{item.label}</Link>,
    children: item.children
      ? item.children.map((child) => ({
          key: child.key,
          label: <Link href={child.url}>{child.label}</Link>,
        }))
      : undefined,
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
      <div className="header-mobile">
        <div className="container">
          <Flex className="header-mobile__wrapper" justify="space-between" align="stretch">
            <div className="">
              <Logo />
            </div>
            <Flex align="center" onClick={showDrawer}>
              <FaBars size={24} />
            </Flex>
          </Flex>
        </div>
      </div>

      {/* SIDEBAR */}
      <Drawer closable={false} placement="right" onClose={onClose} open={open}>
        <Flex className="sidebar-top" align="center" justify="space-between">
          <Logo type="mobile" />
          <FaTimes size={16} onClick={onClose} />
        </Flex>

        <Flex className="header-cart">
          <ButtonCart />
        </Flex>

        <Menu
          className="sidebar-center"
          mode="inline"
          items={menuItems}
          expandIcon={(prop) => (prop.isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />)}
        />

        <Flex vertical className="sidebar-bottom">
          <Form className="sidebar-search">
            <Input
              className="search-input"
              placeholder="Tìm kiếm khóa học"
              suffix={<FaSearch size={16} />}
            />
          </Form>

          <div className="sidebar-contact">
            <ContactInfo vertical />
          </div>

          <div className="sidebar-social">
            <SocialShares />
          </div>

          <Flex className="sidebar-controls" gap={4}>
            <Link href={'/auth/log'}>Đăng nhập</Link>
            <small>|</small>
            <Link href={'/auth/reg'}>Đăng ký</Link>
          </Flex>
        </Flex>
      </Drawer>
    </React.Fragment>
  );
};

export default HeaderMobile;
