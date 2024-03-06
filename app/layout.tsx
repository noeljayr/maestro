import type { Metadata } from "next";

import "@css/globals.css";
import Navigation from "@components/Navigation";
import TopNavigationBar from "@components/TopNavigationBar";
import MainContent from "@components/MainContent";

export const metadata: Metadata = {
  title: "Maestro",
  description: "The only platform you need to stream music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="flex w-full flex-col md:pr-6 scroll-smooth gap-6">
        <div className="background-blob z-0 fixed top-0 left-0"></div>

        <TopNavigationBar />
        <main className="app z-1 flex h-full gap-6 scroll-smooth">
          <div className="main-wrapper hide-scrollbar scroll-smooth flex flex-col gap-6 h-full w-full">
            <div className="main-content w-full gap-6 grid h-full">
              <Navigation />
              {children}
              <MainContent />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
