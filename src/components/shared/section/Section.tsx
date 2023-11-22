import './style.css';
import React from 'react';
import { Typography } from 'antd';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, className = '', title = null } = props;

  return (
    <section className={`${className}`}>
      <div className={`${title ? 'container' : 'container-fluid'}`}>
        {title ? (
          <Typography.Title level={2} className='section-heading'>
            {title}
          </Typography.Title>
        ) : null}
        <div className='section-content'>{children}</div>
      </div>
    </section>
  );
};

export default Section;
