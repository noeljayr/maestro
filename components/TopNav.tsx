import searchIcon from "@public/svg/search-normal.svg";
import Image from "next/image";
import profileIcon from "@public/svg/profile-circle.svg";
import Link from "next/link";

function TopNav() {
  return (
    <div className="top-navbar w-full flex">
      <form action="" className="search flex items-center mr-auto ml-auto">
        <input
          type="text"
          name=""
          id=""
          className="text-sm relative pl-4"
          placeholder="Let's find your vibe"
        />
        <Image src={searchIcon} alt="Search Icon" height={15} width={15} />
      </form>

      <Link
        className="cta flex gap-1 text-sm items-center font-bold"
        href="profile"
      >
        <Image src={profileIcon} alt="Profile Icon" height={20} width={20} />
        Guest
      </Link>
    </div>
  );
}

export default TopNav;
