import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import HeaderMobile from './HeaderMobile';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <HeaderBottom />
      <HeaderMobile />
    </React.Fragment>
  );
};

export default Header;
