'use client'

import React from "react";
import Image from "next/image";
import optionsIcon from "@public/svg/more.svg";
import playIcon from "@public/svg/play.svg";
import Link from "next/link";

type trackProps = {
  id: number;
  title: string;
  duration: string;
  albums: {
    title: string;
    artists: {
      name: string;
    };
  };
};

function Track({ track, number }: { track: trackProps; number: number }) {
  return (
    <span key={track.id} className="track w-full grid items-center gap-2 p-3">
      <span className="position font-bold">{number}</span>
      <span className="music-play">
        <Image
          src={require(`/public/images/${track.albums.title}.png`)}
          alt={track.albums.title}
          height={50}
          width={50}
        />
        <span className="play-icon">
          <Image src={playIcon} alt="Play icon" height={20} width={20} />
        </span>
      </span>
      <span className="track-info w-full flex flex-col">
        <span className="title text-ellipsis text-sm font-bold">
          {track.title}
          <span className="artist-duration items-center flex gap-2 text-xs">
            <Link
              className="text-xs opacity-50 text-ellipsis text-nowrap whitespace-nowrap"
              href=""
            >
              {track.albums.artists.name}
            </Link>
            <span className="font-normal dot-seperator opacity-50">•</span>
            <span className="font-normal opacity-50"> {track.duration}</span>
          </span>
        </span>
      </span>

      <span className="more">
        <Image src={optionsIcon} alt="options" height={10} width={10} />
      </span>
    </span>
  );
}

export default Track;