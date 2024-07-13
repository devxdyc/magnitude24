import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SparklesPreview } from "@/components/main";
import { url } from "inspector";
import Header from "@/components/Header";
import { Josefin_Sans } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-higlight";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Specify the font weights you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body className=" bg-background text-foreground">
        <div className=" w-full bg-background text-foreground bg-dot-white/[0.2]  relative  ">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center bg-background text-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_90%,white)]"></div>

          <main className="min-h-screen flex flex-col items-center ">
            <Header />

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
