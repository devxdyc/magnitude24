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

export default async function Index() {
  const supabase = createClient();

  let { data: EVENTS, error } = await supabase.from("faqs").select("*");
  console.log(EVENTS);

  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center   ">
      <Hero />
      {/* <SparklesPreview /> */}
    </div>
  );
}
