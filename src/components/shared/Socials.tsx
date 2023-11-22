import { Flex } from 'antd';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Socials: React.FC = () => {
  return (
    <Flex align='center' gap={'middle'}>
      <Link to='#'>
        <FaFacebookF />
      </Link>
      <Link to='#'>
        <FaLinkedinIn />
      </Link>
      <Link to='#'>
        <TfiYoutube size={18} />
      </Link>
    </Flex>
  );
};

export default Socials;
