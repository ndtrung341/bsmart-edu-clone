import React from 'react';
import './styles/header-bottom.css';
import { Flex, Badge } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import Logo from '~/components/shared/Logo';
import { NAVS } from '~/constant';

const HeaderBottom: React.FC = () => {
  return (
    <div className='header-bottom'>
      <div className='container'>
        <Flex className='header-bottom__wrapper' justify='space-between' align='center'>
          <Logo />
          <nav className='nav header-nav'>
            <Flex>
              {NAVS.map((item) => (
                <div key={item.key} className='nav-item'>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-item__link ${isActive ? 'nav-item__link--active' : ''}`
                    }
                    to={item.url}
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className='sub-menu'>
                      {item.children.map((child) => (
                        <div key={child.key} className='nav-item'>
                          <NavLink
                            className={({ isActive }) =>
                              `nav-item__link ${isActive ? 'nav-item__link--active' : null}`
                            }
                            to={child.url}
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
          <div className='header-cart'>
            <Link to={'/cart'}>
              <Badge color='var(--primary-color)' count={5} offset={[0, 20]}>
                <img src='/icon-shopping-cart.webp' alt='Giỏ hàng' />
              </Badge>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
