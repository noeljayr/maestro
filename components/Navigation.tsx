"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MusicPlay } from "iconsax-react";
import { Home2 } from "iconsax-react";
import { Profile2User } from "iconsax-react";
import { MusicCircle } from "iconsax-react";
import profileIcon from "@public/svg/profile-circle.svg";
import { Heart } from "iconsax-react";
import { MusicPlaylist } from "iconsax-react";
import { MusicSquare } from "iconsax-react";

let color: string = "#d9e7fa";
let size: string = "20";
const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <Home2 size={size} color={color} variant="Broken" />,
  },
  {
    name: "Maestro AI",
    href: "/maestroAI",
    icon: <MusicPlay size={size} color={color} variant="Broken" />,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: <MusicCircle size="24" color={color} variant="Broken" />,
  },
  {
    name: "Library",
    href: "/library",
    icon: <MusicPlaylist size={size} color={color} />,
  },
  {
    name: "Favorites",
    href: "/favorites",
    icon: <Heart size={size} color={color} variant="Broken" />,
  },
  {
    name: "Artists",
    href: "/artists",
    icon: <Profile2User size={size} color={color} variant="Broken" />,
  },
  {
    name: "Albums",
    href: "/albums",
    icon: <MusicSquare size={size} color={color} variant="Broken" />,
  },
  {
    name: "Playlists",
    href: "/playlists",
    icon: <MusicPlaylist size={size} color={color} />,
  },
];

function activeLink(active: boolean) {
  if (!active) {
    color = "#d9e7fa";
    return "flex items-center gap-2 items-center w-full font-medium relative";
  } else {
    color = "#005fdb";
    return "flex items-center gap-2 w-full font-medium relative link-active";
  }
}

// const linkClassName = "flex items-center p-2 px-4 w-full font-medium relative";
// const activeLink =
//   "flex items-center p-2 px-4 w-full font-medium relative link-active";

function Navigation() {
  const pathname = usePathname();
  return (
    <div className="navbar h-full flex flex-col pt-4 px-4 items-center gap-6">
      <h1 className="text-lg font-bold">Maestro</h1>
      <ul className="flex gap-2 w-full flex-col pb-5">
        {navLinks.slice(0, 4).map((link, index) => {
          let number = index + 1;
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className={`link-` + number.toString()}>
              <Link className={activeLink(isActive)} href={link.href}>
                {link.icon}
                <span className="text-sm">{link.name}</span>
              </Link>
            </li>
          );
        })}
        <Link
          className="flex gap-1 text-sm md:hidden items-center"
          href="profile"
        >
          <Image src={profileIcon} alt="Profile Icon" height={20} width={20} />
          <span>Guest</span>
        </Link>
      </ul>

      <div className="nav-library w-full flex flex-col">
        <h3 className="title opacity-50 font-normal">Libray</h3>

        {navLinks.slice(4, 8).map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} className={activeLink(isActive)}>
              {link.icon}
              <span className="text-sm">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
