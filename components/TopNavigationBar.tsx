"use client";

import { usePathname } from "next/navigation";
import TopNav from "@components/TopNav";

function TopNavigationBar() {
  const pathname = usePathname();
  return <>{pathname !== "/maestroAI" && <TopNav />}</>;
}

export default TopNavigationBar;
