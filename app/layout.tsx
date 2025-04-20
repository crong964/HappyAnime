import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Foot } from "@/components/foot";
import { NaviC } from "@/components/navi";
;

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
    <html lang="vi" className=" block ">

      <head>

        <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <meta
          name="google-site-verification"
          content="cQFNw_W7NueSO_re4v6NYult8Y_zdLLKz5457qvRIqQ"
        />
        <meta charSet="UTF-8" />
        <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
        <meta property="og:image:alt" content="Anime vui" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="96" />
        <meta property="og:image:height" content="96" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2Z795ND0WS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2Z795ND0WS');`}}    >
        </script>
      </head>
      <body
        className="bg-bg p-0 m-0  text-t "
      >


        <div className="sticky top-0 left-0 z-50 w-full">
          <Header />
        </div>
        {children}
        <Foot></Foot>

        <div className="bg-bg py-2 flex justify-around sm:hidden z-[1000000] fixed bottom-0 left-0 w-full">
          <NaviC></NaviC>
        </div>

      </body>
    </html>
  );
}
