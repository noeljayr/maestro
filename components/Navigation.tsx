"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import homeIcon from "@public/svg/home-2.svg";
// import trendingIcon from "@public/svg/activity.svg";
import aiIcon from "@public/svg/music-play.svg";
import libraryIcon from "@public/svg/music-playlist.svg";
import discoverIcon from "@public/svg/discover.svg";

const navLinks = [
  { key: "1", name: "Home", href: "/", icon: homeIcon },
  { key: "2", name: "Maestro AI", href: "/maestroAI", icon: aiIcon },
  // { key: "3", name: "Trending", href: "/trending", icon: trendingIcon },
  { key: "4", name: "Explore", href: "/explore", icon: discoverIcon },
  { key: "5", name: "Library", href: "/library", icon: libraryIcon },
];

const linkClassName = "flex items-center p-2 px-4 w-full font-medium relative";
const activeLink =
  "flex items-center p-2 px-4 w-full font-medium relative link-active";

function Navigation() {
  const pathname = usePathname();
  return (
    <div className="navbar max-md:hidden h-full flex flex-col pt-4 px-4 items-center gap-6">
      <h1 className="text-lg font-bold">Maestro</h1>
      <ul className="flex gap-2 w-full flex-col pb-5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.key}>
              <Link
                className={isActive ? activeLink : linkClassName}
                href={link.href}
              >
                <Image
                  className="mr-3"
                  src={link.icon}
                  alt="Icon"
                  height={21}
                  width={21}
                />
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
