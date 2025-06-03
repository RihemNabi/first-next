/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { ReactNode } from "react";
interface NavLinkProps {
  href: string;
  children: ReactNode;
}
export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-white hover:text-pink-100 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
