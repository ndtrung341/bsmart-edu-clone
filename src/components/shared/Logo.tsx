import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  type?: 'light' | 'dark' | 'mobile';
}

const Logo: React.FC<LogoProps> = (props) => {
  const { type = 'light' } = props;
  const logoSrc =
    type === 'dark'
      ? '/icon-logo-footer.webp'
      : type === 'light'
        ? '/icon-logo.webp'
        : '/icon-logo-mobile.webp';

  const size = useMemo(() => {
    if (type === 'mobile') return { width: 100, height: 75 };
    return { width: 190, height: 75 };
  }, [type]);

  return (
    <div className='logo' style={size}>
      <Link to={'/'}>
        <img
          src={logoSrc}
          alt='Logo'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
