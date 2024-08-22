import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SparklesPreview } from "@/components/main";
import { url } from "inspector";
import Header from "@/components/Header";
import { Urbanist } from "next/font/google";
import { HeroHighlight } from "@/components/ui/hero-higlight";
import Footer from "@/components/homepage/footer";
import { Analytics } from "@vercel/analytics/react";

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
