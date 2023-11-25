"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useMemo } from "react";

interface NavLinkProps {
  className?: string | (({ isActive }: { isActive: boolean }) => string);
  children: React.ReactNode | (({ isActive }: { isActive: boolean }) => ReactNode);
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, className }) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === href, [href, pathname]);

  return (
    <Link href={href} className={typeof className === "function" ? className({ isActive }) : className}>
      {typeof children === "function" ? children({ isActive }) : children}
    </Link>
  );
};

export default NavLink;
