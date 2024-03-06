import "@css/index.css";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import rightIcon from "@public/svg/arrow-right.svg";
import Track from "@components/Track";

async function getTracks() {
  const prisma = new PrismaClient();
  const tracks = await prisma.tracks.findMany({
    include: {
      albums: {
        select: {
          id: true,
          title: true,
          artists: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return tracks;
}

const Home = async () => {
  const tracks = await getTracks();

  return (
    <div className="home-content gap-6">
      <div className="featured-wrapper"></div>
      <div className="top-chart hide-scrollbar grid gap-2 p-4">
        <Link
          href="top"
          className="flex items-center w-full justify-between text-sm font-bold"
        >
          <span>Top Charts</span>

          <span className="view-more ml-auto">
            View More
            <Image
              src={rightIcon}
              className=""
              alt="right-icon"
              height={20}
              width={20}
            />
          </span>
        </Link>

        <span className="track-wrapper hide-scrollbar grid gap-2">
          {tracks.map((track, index) => (
            <Track key={track.id} track={track} number={index + 1} />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Home;
