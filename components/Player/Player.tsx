import React from "react";
import "@css/player.css";
import playIcon from "@public/svg/play.svg";
import Image from "next/image";

function Player() {
  return (
    <div className="player">
      <div className="cover"></div>
      <div className="now-playing"></div>
      <div className="play">
        <Image src={playIcon} alt="play icon" height={30} width={30} />
      </div>
    </div>
  );
}

export default Player;
