"use client";

import { usePathname } from "next/navigation";
import TopNav from "@components/TopNav";
import { useRouter } from "next/router";

function TopNavigationBar() {
  const pathname = usePathname();
  const isTopNavVisible = !(pathname === "/maestroAI" || pathname.startsWith("/artist"));
  return <>{isTopNavVisible && <TopNav />}</>;
}

export default TopNavigationBar;
