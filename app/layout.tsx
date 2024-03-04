import type { Metadata } from "next";

import "@css/globals.css";
import Navigation from "@components/Navigation";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContent from "@components/MainContent";


export const metadata: Metadata = {
  title: "Maestro",
  description: "The only platform you need to stream music",
};

const tracks = [
  {
    title: "THANK GOD",
    album_id: 2,
    duration: "3:04",
    popularity: 100,
    cover_image: "public/arts/utopia.jpeg",
    audio_src: "public/audios/02 THANK GOD - (SongsLover.com)",
  },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="flex w-full flex-col md:pr-6 scroll-smooth">
        <div className="background-blob z-0 fixed top-0 left-0"></div>

        <main className="app z-1 flex gap-6 scroll-smooth">
          <Navigation />
          <div className="main-wrapper hide-scrollbar scroll-smooth flex flex-col gap-6 h-full w-full p-4">
            <TopNavigationBar />
            <div className="main-content w-full gap-6 grid h-full">
              {children}
              <MainContent />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
