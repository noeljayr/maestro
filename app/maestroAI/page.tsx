"use client";

import arrowIcon from "@public/svg/arrow-circle-down.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import classnames from "classnames";

const features = [
  {
    title: "Discover hidden gems",
    description: `Discover hidden gems you'll love. Maestro AI expands your music horizon by
                   introducing you to new music that shares the qualities you already enjoy.`,
  },
  {
    title: "Personalized Playlists",
    description: `Maestro AI creates playlists all based on your music taste and listening habits.`,
  },
  {
    title: "Mood Maestro",
    description: `Simply tell the AI your mood, "energetic", "relaxed", or
  "focused," and it will create a dynamic playlist to match your
  current vibe.`,
  },
];

function MaestroAI() {
  const [isIntoView, setIsIntoView] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntoView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  const baseClassNames = classnames(
    "feature flex text-balance flex-col gap-2 p-4"
  );
  const dynamicClassName = isIntoView ? "visible" : "show-on-scroll";

  return (
    <div className="flex flex-col w-full h-full gap-10 hide-scrollbar maestro-wrapper">
      <div className="top-section flex flex-col gap-4 ">
        <h1 className="lg:text-6xl text-5xl max-sm:text-4xl text-center font-extrabold">
          Introducing Maestro AI
        </h1>
        <p className="text-sm text-center">
          Your personal guide to a world of musical exploration. Maestro AI goes
          beyond basic recommendations, delving into your unique taste to.
        </p>

        <span>
          <Link href="#features">
            <Image src={arrowIcon} height={50} width={50} alt="arrow icon" />
          </Link>
        </span>
      </div>

      <div className="bottom-section flex flex-col-reverse w-full mb-10 justify-between">
        <div className="left flex flex-col gap-4">
          <form action="" className="flex flex-col gap-4">
            <p className="text-sm">
              Maestro AI is currently in beta, join the wait list for early
              access.
            </p>
            <div className="input-group flex flex-col gap-3">
              <input type="email" placeholder="example@gmail.com" />
              <button className="cta">Save your spot!</button>
            </div>
          </form>
        </div>

        <div id="features" className="right grid">
          {features.map((ft) => (
            <div
              ref={elementRef}
              key={ft.title}
              className={classnames(baseClassNames, dynamicClassName)}
            >
              <h2 className="text-base font-extrabold">{ft.title}</h2>
              <p className="text-xs">{ft.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MaestroAI;
