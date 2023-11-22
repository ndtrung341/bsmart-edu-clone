import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../partials/header';
import { Layout } from 'antd';
import Footer from '../partials/footer/Footer';

const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default MainLayout;
