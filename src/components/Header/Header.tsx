import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderMobile from './HeaderMobile/HeaderMobile';

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
