"use client";

import React from "react";
import Image from "next/image";
import optionsIcon from "@public/svg/more.svg";
import playIcon from "@public/svg/play.svg";
import Link from "next/link";

type trackProps = {
  id: number;
  title: string;
  duration: string;
  popularity: number;
  albums: {
    id: number;
    title: string;
    artists: {
      id: number;
      name: string;
    };
  };
};

function formatNumber(number: number) {
  const isNegative = number < 0;
  number = Math.abs(number);

  const thresholds = [1e3, 1e6, 1e9];
  const suffixes = ["K", "M", "B"];

  let suffixIndex = thresholds.length - 1;
  while (number < thresholds[suffixIndex] && suffixIndex > 0) {
    suffixIndex--;
  }

  const formattedNumber = (number / thresholds[suffixIndex]).toFixed(1);
  return (isNegative ? "-" : "") + formattedNumber + suffixes[suffixIndex];
}

function Track({ track, number }: { track: trackProps; number: number }) {
  return (
    <span key={track.id} className="track w-full grid items-center gap-2 p-3">
      <span className="position font-bold">{number}</span>
      <span className="music-play">
        <Image
          src={require(`/public/images/covers/${track.albums.id}.png`)}
          alt={track.albums.title}
          height={50}
          width={50}
        />
        <span className="play-icon">
          <Image src={playIcon} alt="Play icon" height={20} width={20} />
        </span>
      </span>
      <span className="track-info gap-2 w-full flex flex-col">
        <span className="title flex flex-col gap-1 text-ellipsis text-sm font-bold">
          <span title={track.title}>{track.title}</span>
          <span className="artist-duration items-center flex gap-3 text-xs">
            <Link
              className="text-xs opacity-50 text-ellipsis text-nowrap whitespace-nowrap"
              href={`artist/${track.albums.artists.id}`}
            >
              {track.albums.artists.name}
            </Link>
            <span className="font-normal dot-seperator opacity-50">•</span>
            <span className="font-normal opacity-50"> {track.duration}</span>
            <span className="font-normal optional dot-seperator opacity-50">
              •
            </span>
            <span className="font-normal optional opacity-50">
              {" "}
              Played {" " + formatNumber(track.popularity) + " "} times
            </span>
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
