import Genre from "@components/Genre";
import Artist from "@components/Artist";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import rightIcon from "@public/svg/arrow-right.svg";
import "@css/explore.css";
import Link from "next/link";


async function getArtists() {
  const prisma = new PrismaClient();
  const artists = await prisma.artists.findMany();
  return artists;
}

const Explore = async () => {
  const artists = await getArtists();

  return (
    <div className="flex flex-col gap-6">
      <Genre />

      <div className="artists grid gap-3">
        <Link href="artists" className="font-bold w-full flex items-center">
          {" "}
          Popular Artists
          <span className="view-more ml-auto">
            View More
            <Image
              src={rightIcon}
              className="ml-1"
              alt="right-icon"
              height={20}
              width={20}
            />
          </span>
        </Link>
        <div className="artists-container hide-scrollbar grid gap-4">
          {artists.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
