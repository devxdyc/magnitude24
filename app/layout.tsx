import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SparklesPreview } from "@/components/main";
import { url } from "inspector";
import Header from "@/components/Header";
import { Urbanist } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-higlight";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "YOUTHVIBE",
  description: "LPU'S GLOBAL OPEN FEST",
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
      <body className=" bg-black text-foreground">
        {/* <div className=" w-full bg-black text-white bg-dot-white/[0.2]  relative  "> */}
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center bg-black text-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)]"></div> */}

        <div className=" fixed top-[-150px] z-[-2] h-[300px] left-[-170px] w-[300px] rounded-[500px] bg-primary blur-[200px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className=" fixed  bottom-[-150px] z-[-2] h-[300px] right-[-170px] w-[300px] rounded-[500px] bg-primary blur-[200px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <main className="min-h-screen flex flex-col items-center ">
          <Header />

          {children}
        </main>
        {/* </div> */}
      </body>
    </html>
  );
}
