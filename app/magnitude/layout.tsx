import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { SparklesPreview } from "@/components/main";
import { url } from "inspector";
import Header from "@/components/Header";
import { Urbanist, Fruktur } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-higlight";
import Footer from "@/components/homepage/footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Mainloder from "@/components/homepage/loader";
import VideoPlayer from "@/components/homepage/index";
import Marquee from "react-fast-marquee";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "MAGNITUDE",
  description: "LPU'S CULTURAL FEST",
};

const UrbanistF = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Specify the font weights you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={UrbanistF.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className=" bg-black text-foreground">
        <VideoPlayer>
          {/* <div className=" w-full bg-black text-white bg-dot-white/[0.2]  relative  "> */}
          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="absolute pointer-events-none inset-0 flex items-center bg-black text-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"></div> */}

          {/* <Suspense fallback={<Mainloder />}> */}
          {/* <BackgroundBeamsWithCollision className=""> */}
          <div className="  fixed top-[-150px] z-[-2] h-[300px] left-[-170px] w-[300px] rounded-[500px] bg-primary blur-[200px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className=" bgBlobs blur-3xl fixed top-[-150px] z-[-2] h-[300px] left-[-170px] w-[300px]  "></div>
          <div className=" fixed  bottom-[-150px] z-[-2] h-[300px] right-[-170px] md:w-[300px] rounded-[500px] bg-primary blur-[200px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <main className="min-h-screen flex flex-col items-center w-full ">
            {/* <Marquee className="bg-primary text-primary-foreground w-full p-3 font-xl font-semibold text-center">
              The venue for the auditions and events will be updated soon.
            </Marquee> */}
            <Header />
            {children}
          </main>
          <Footer />
          {/* </div> */}
          {/* </BackgroundBeamsWithCollision> */}
          {/* </Suspense> */}
          <Toaster />
        </VideoPlayer>
      </body>
    </html>
  );
}
