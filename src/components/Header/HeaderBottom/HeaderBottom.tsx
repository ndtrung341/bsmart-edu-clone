import React from 'react';
import './header_bottom.css';
import { Flex } from 'antd';
import Logo from '@/src/components/Logo';
import NavLink from '@/src/components/NavLink';
import { NAVS } from '@/src/utils/constant';
import ButtonCart from '../../ButtonCart';

const HeaderBottom: React.FC = () => {
  return (
    <div className="header-bottom">
      <div className="container">
        <Flex className="header-bottom__wrapper" justify="space-between" align="center">
          <Logo />
          <nav className="nav header-nav">
            <Flex>
              {NAVS.map((item) => (
                <div key={item.key} className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item__link ${isActive ? 'nav-item__link--active' : ''}`
                    }
                    href={item.url}
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="sub-menu">
                      {item.children.map((child) => (
                        <div key={child.key} className="nav-item">
                          <NavLink
                            className={({ isActive }) =>
                              `nav-item__link ${isActive ? 'nav-item__link--active' : null}`
                            }
                            href={child.url}
                          >
                            {child.label}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </Flex>
          </nav>
          <div className="header-cart">
            <ButtonCart />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
