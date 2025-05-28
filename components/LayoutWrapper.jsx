"use client"; // très important pour utiliser le hook côté client

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && <Header />}
      {children}
    </>
  );
}
