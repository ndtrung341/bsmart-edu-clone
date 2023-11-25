import { Flex } from "antd";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const SocialShares: React.FC = () => {
  return (
    <Flex align="center" gap={"middle"}>
      <Link href="#">
        <FaFacebookF />
      </Link>
      <Link href="#">
        <FaLinkedinIn />
      </Link>
      <Link href="#">
        <TfiYoutube size={18} />
      </Link>
    </Flex>
  );
};

export default SocialShares;
