import "@css/index.css";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import optionsIcon from "@public/svg/more.svg";

async function getTracks() {
  const prisma = new PrismaClient();
  const tracks = await prisma.tracks.findMany({
    include: {
      albums: {
        select: {
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
          View all
        </Link>

        <span className="track-wrapper hide-scrollbar grid gap-2">
          {tracks.map((track, index) => {
            const number = index + 1;
            return (
              <span
                key={track.id}
                className="track w-full grid items-center gap-2 p-3"
              >
                <span className="position font-bold">{number}</span>
                <Image
                  src={require(`/public/images/${track.albums.title}.png`)}
                  alt={track.albums.title}
                  height={50}
                  width={50}
                />
                <span className="track-info w-full flex flex-col">
                  <span className="title text-ellipsis text-sm font-bold">
                    {track.title}
                  </span>
                  <Link
                    className="text-xs text-ellipsis text-nowrap whitespace-nowrap opacity-70"
                    href=""
                  >
                    {track.albums.artists.name}
                  </Link>
                </span>
                <span className="duration text-xs opacity-50">
                  {track.duration}
                </span>
                <span className="more">
                  <Image
                    src={optionsIcon}
                    alt="options"
                    height={10}
                    width={10}
                  />
                </span>
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Home;
