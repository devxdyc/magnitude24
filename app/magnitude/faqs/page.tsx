import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Index() {
  const supabase = createClient();

  let { data: faqs, error } = await supabase.from("faqs").select("*");

  return (
    <div className="flex-1 w-full text-3xl flex flex-col gap-20 items-center">
      <Accordion
        type="single"
        collapsible
        className="w-[80%] lg:w-[800px] text-3xl  gap-4 p-4"
      >
        {faqs &&
          faqs.map((faqs) => (
            <AccordionItem value={faqs.id}>
              <AccordionTrigger>{faqs.title}</AccordionTrigger>
              <AccordionContent>{faqs.description}</AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
}
