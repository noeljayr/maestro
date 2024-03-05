import React from "react";
import Image from "next/image";
import rightIcon from "@public/svg/arrow-right.svg";

function ViewAllBtn({ text }: { text: string }) {
  return (
    <span className="view-more ml-auto">
      {text}
      <Image
        src={rightIcon}
        className="ml-1"
        alt="right-icon"
        height={20}
        width={20}
      />
    </span>
  );
}

export default ViewAllBtn;
