"use client";

import { usePathname } from "next/navigation";
import Player from "@components/Player";

function MainContent() {
  const pathname = usePathname();
  return <>{pathname !== "/maestroAI" && <Player />}</>;
}

export default MainContent;
