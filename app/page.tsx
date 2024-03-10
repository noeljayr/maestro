import "@css/index.css";
import Link from "next/link";
// import { PrismaClient } from "@prisma/client";
import Image from "next/image";
// import rightIcon from "@public/svg/arrow-right.svg";
// import Track from "@components/Track";
import topPickBg from "@public/images/top-picks.png";
import theOffseason from "@public/images/covers/2.png";

const Home = async () => {
  return (
    <div className="home-content hide-scrollbar gap-6">
      <div className="featured-wrapper"></div>
      <div className="recent flex flex-col gap-4">
        <span className="font-bold text-sm">Dive back in</span>
        <div className="playlist-container gap-4">
          <div className="left gap-4">
            <Link href="/top" className="">
              <span className="week text-2xl font-black">
                Top picks this week
              </span>
              <Image
                className="top-bg"
                src={topPickBg}
                alt="Headphones"
                height={500}
                width={500}
              />
            </Link>
            <Link href="" className="p-1">
              2
            </Link>
          </div>
          <div className="right gap-4">
            <Link href={""} className="p-1 gap-2">
              <Image
                src={theOffseason}
                alt="Off-season"
                height={500}
                width={500}
              />
              <span className="font-sm">
               <span className="font-bold text-sm">The Off-Season</span>
              </span>
            </Link>
            <Link href={""} className="p-1 gap-2">
              4
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
