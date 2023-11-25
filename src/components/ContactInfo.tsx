import { Flex } from "antd";
import Image from "next/image";
import React from "react";
import mailIcon from "@/public/icon-gmail.webp";
import phoneIcon from "@/public/icon-phone.webp";

const ContactInfo: React.FC<{ vertical?: boolean }> = ({ vertical = false }) => {
  return (
    <Flex vertical={vertical} gap={"middle"}>
      <Flex align="center">
        <Image src={mailIcon} alt="email" />
        admin@bsmart.edu.com
      </Flex>
      <Flex align="center">
        <Image src={phoneIcon} alt="phone" />
        028 9999 79 39
      </Flex>
    </Flex>
  );
};

export default ContactInfo;
