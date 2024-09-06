import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SparklesPreview } from "@/components/sparkelsPreview";
import Hero from "@/components/homepage/hero";
import Slider from "@/components/homepage/Slider";
import Timeline from "@/components/homepage/timeline";
import { AppleCardsCarouselDemo } from "@/components/homepage/Crosal";
import { HeroScroll } from "@/components/homepage/hero2";
import { LayoutPerformances } from "@/components/homepage/PastPerformances";
import { AnimatedPin } from "@/components/homepage/links";
import { CanvasRevealEffectDemo } from "@/components/homepage/fests";

export default async function Index() {
  const supabase = createClient();

  let { data: EVENTS, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_featured", true);

  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center mb-8  ">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      </head>
      <div className="flex md:hidden">
        <Hero />
      </div>

      <div className="hidden md:flex">
        <HeroScroll />
      </div>
      {/* <SparklesPreview /> */}
      {/* {EVENTS && <Slider events={EVENTS} />} */}
      {EVENTS && <AppleCardsCarouselDemo events={EVENTS} />}
      {/* <div className=" h-full py-20 ">
        <h2 className="max-w-7xl pl-4 my-8 mx-auto text-xl md:text-5xl font-bold text-primary/60 font-sans">
          Our Exclusive Fests
        </h2>

        <CanvasRevealEffectDemo />
      </div> */}
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-primary/60 font-sans">
          Our Former Resplendent Galas
        </h2>

        <LayoutPerformances />
      </div>
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-primary/60 font-sans">
          Our Socials
        </h2>

        <AnimatedPin />
      </div>
      {/* <Timeline /> */}
    </div>
  );
}
