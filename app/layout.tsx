import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Foot } from "@/components/foot";
import { NaviC } from "@/components/navi";
import { HomeIcon } from "@/icon";
import { Fashed } from "./t/dass";



export const metadata: Metadata = {
  title: " Animevui - Hoạt Hình Hay Online",
  description: "Web xem phim anime online tiếng việt, phim anime vietsub, tổng hợp phim hoạt hình nhật bản mới nhất & hay,  hoạt hình 3D",
  keywords: ["anime", "phim mới", "Animevui"],
  other: {

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full block ">

      <head>
        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <meta
          name="google-site-verification"
          content="cQFNw_W7NueSO_re4v6NYult8Y_zdLLKz5457qvRIqQ"
        />
        <meta property="og:image:alt" content="Anime vui" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="96" />
        <meta property="og:image:height" content="96" />

      </head>
      <body
        className="bg-bg p-0 m-0  text-t h-full  overflow-hidden"
      >

        <div className="h-full relative overflow-y-auto overflow-x-hidden">
          <div className="h-max ">
            <div className="sticky top-0 left-0 z-50 w-full">
              <Header />
            </div>
            {children}
            <Foot></Foot>
          </div>
        </div>
        <div className="bg-bg py-2 flex justify-around sm:hidden z-[1000000] fixed bottom-0 left-0 w-full">
          <NaviC></NaviC>
        </div>
      </body>
    </html>
  );
}
{/* <body
        className="bg-bg p-0 m-0  text-t h-full  overflow-hidden"
      >

        <div className="h-full relative overflow-y-auto overflow-x-hidden">
          <div className="h-max ">
            <div className="sticky top-0 left-0 z-50 w-full">
              <Header />
            </div>
            {children}
            <Foot></Foot>
          </div>
        </div>
        <div className="bg-bg py-2 flex justify-around sm:hidden z-[1000000] fixed bottom-0 left-0 w-full">
          <NaviC></NaviC>
        </div>
      </body> */}