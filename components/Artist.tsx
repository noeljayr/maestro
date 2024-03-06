"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type artistProp = {
  id: number;
  name: string;
};

function Artist({ artist }: { artist: artistProp }) {
  return (
    <Link
      href={`/artist/${artist.id}`}
      className="artist flex flex-col gap-2 p-2"
    >
      <span className="artist-img">
        <Image
          alt={artist.name}
          height={100}
          width={100}
          src={require(`/public/images/artists/${artist.id}.jpg`)}
        />
      </span>
      <span className="font-bold text-sm">{artist.name}</span>
    </Link>
  );
}

export default Artist;
