import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import lightLogo from "@/public/icon-logo.webp";
import darkLogo from "@/public/icon-logo-footer.webp";
import mobileLogo from "@/public/icon-logo-mobile.webp";

interface LogoProps {
  type?: "light" | "dark" | "mobile";
}

const Logo: React.FC<LogoProps> = (props) => {
  const { type = "light" } = props;
  const logoSrc = type === "dark" ? darkLogo : type === "light" ? lightLogo : mobileLogo;

  const size = useMemo(() => {
    if (type === "mobile") return { width: 100, height: 75 };
    return { width: 190, height: 75 };
  }, [type]);

  return (
    <div className="logo" style={size}>
      <Link href={"/"}>
        <Image
          src={logoSrc}
          alt="Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
