import { Flex } from 'antd';
import React from 'react';

const Contact: React.FC<{ vertical?: boolean }> = ({ vertical = false }) => {
  return (
    <Flex vertical={vertical} gap={'middle'}>
      <Flex align='center'>
        <img src='/icon-gmail.webp' alt='' />
        admin@bsmart.edu.com
      </Flex>
      <Flex align='center'>
        <img src='/icon-phone.webp' alt='' />
        028 9999 79 39
      </Flex>
    </Flex>
  );
};

export default Contact;
