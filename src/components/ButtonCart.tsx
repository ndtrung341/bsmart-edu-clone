import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconCart from "@/public/icon-shopping-cart.webp";

const ButtonCart = () => {
  return (
    <Link href={"/cart"}>
      <Badge color="var(--primary-color)" count={5} offset={[0, 20]}>
        <Image src={iconCart} alt="Giỏ hàng" />
      </Badge>
    </Link>
  );
};

export default ButtonCart;
