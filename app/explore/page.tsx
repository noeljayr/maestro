import Genre from "@components/Genre";
import Artist from "@components/Artist";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import rightIcon from "@public/svg/arrow-right.svg";
import "@css/explore.css";
import Link from "next/link";
import Track from "@components/Track";

async function getArtists() {
  const prisma = new PrismaClient();
  const artists = await prisma.artists.findMany();
  return artists;
}

const trendingSongs = [
  {
    id: 1,
    title: "Kusangalala (With LeuMas)",
    duration: "4:57",
    popularity: 76794,
    albums: {
      id: 10,
      title: "Single",
      artists: {
        id: 5,
        name: "Zeze Kingston",
      },
    },
  },
  {
    id: 11,
    title: "Ningenjelwanga",
    duration: "3:31",
    popularity: 64447,
    albums: {
      id: 11,
      title: "Single",
      artists: {
        id: 6,
        name: "Twnda",
      },
    },
  },
  {
    id: 3,
    title: "Una",
    duration: "2:37",
    popularity: 63878,
    albums: {
      id: 12,
      title: "Ah Yami",
      artists: {
        id: 7,
        name: "Saint Realest",
      },
    },
  },
  {
    id: 4,
    title: "Step by Step",
    duration: "1:54",
    popularity: 63821,
    albums: {
      id: 13,
      title: "Tape II",
      artists: {
        id: 8,
        name: "Crispy Malawi",
      },
    },
  },
  {
    id: 5,
    title: "Muchedwa",
    duration: "4:57",
    popularity: 50174,
    albums: {
      id: 14,
      title: "Single",
      artists: {
        id: 9,
        name: "Kell Kay",
      },
    },
  },
  {
    id: 6,
    title: "Mukadalitsa (feat Praise Umali & Kambwiri Sisters)",
    duration: "3:13",
    popularity: 50016,
    albums: {
      id: 15,
      title: "Single",
      artists: {
        id: 10,
        name: "Gwamba",
      },
    },
  },
  {
    id: 7,
    title: "Laura",
    duration: "3:14",
    popularity: 49011,
    albums: {
      id: 16,
      title: "Single",
      artists: {
        id: 11,
        name: "Dr Namadingo",
      },
    },
  },
  {
    id: 8,
    title: "Kale (with Qaso, Pop Young, Emmie Deebo & Diego Watumanye)",
    duration: "3:13",
    popularity: 48216,
    albums: {
      id: 17,
      title: "Single",
      artists: {
        id: 12,
        name: "Akometsi Entertainment",
      },
    },
  },
  {
    id: 9,
    title: "Magulu",
    duration: "3:43",
    popularity: 30066,
    albums: {
      id: 18,
      title: "Single",
      artists: {
        id: 13,
        name: "Temwa",
      },
    },
  },
  {
    id: 10,
    title: "TRAILER",
    duration: "3:59",
    popularity: 23544,
    albums: {
      id: 19,
      title: "Single",
      artists: {
        id: 14,
        name: "Driemo Mw",
      },
    },
  },
];

const Explore = async () => {
  const artists = await getArtists();

  return (
    <div className="flex explore-content hide-scrollbar flex-col gap-7">
      <Genre />

      <div className="artists grid gap-3">
        <Link
          href="artists"
          className="font-bold w-full px-4 flex items-center"
        >
          {" "}
          Popular Artists
          <span className="view-more ml-auto">
            Explore More
            <Image
              src={rightIcon}
              className=""
              alt="right-icon"
              height={20}
              width={20}
            />
          </span>
        </Link>
        <div className="artists-container pl-4 hide-scrollbar grid gap-4">
          {artists.map((artist) => (
            <Artist key={artist.id} artist={artist} />
          ))}
        </div>
      </div>

      <div className="trending px-4 grid gap-3">
        <Link href="#" className="font-bold w-full flex items-center">
          {" "}
          Trending in Malawi right now
        </Link>
        {trendingSongs.map((track, index) => (
            <Track key={track.id} track={track} number={index + 1} />
          ))}
      </div>
    </div>
  );
};

export default Explore;
