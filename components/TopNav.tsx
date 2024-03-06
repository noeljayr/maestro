import searchIcon from "@public/svg/search-normal.svg";
import Image from "next/image";
import profileIcon from "@public/svg/profile-circle.svg";
import Link from "next/link";
import notificationIcon from "@public/svg/bell.svg";
import sortIcon from "@public/svg/candle-2.svg";

function TopNav() {
  return (
    <div className="top-navbar gap-6 w-full flex">
      <form
        action=""
        className="search w-full flex items-center mr-auto ml-auto"
      >
        <input
          type="text"
          name=""
          id=""
          className="text-sm relative pl-4"
          placeholder="Let's find your vibe"
        />
        <Image
          src={searchIcon}
          className="search-icon"
          alt="Search Icon"
          height={30}
          width={30}
        />
        <span className="sort">
          <Image
            src={sortIcon}
            className="sort-icon"
            alt="Search Icon"
            height={50}
            width={50}
          />
        </span>
      </form>

      <span className="notification flex max-sm:hidden">
        <Image
          src={notificationIcon}
          alt="Nofitication Icon"
          height={50}
          width={50}
        />
      </span>

      <Link className="cta flex gap-1 text-sm items-center" href="profile">
        <span>
          <Image src={profileIcon} alt="Profile Icon" height={20} width={20} />
        </span>
        Guest
      </Link>
    </div>
  );
}

export default TopNav;
