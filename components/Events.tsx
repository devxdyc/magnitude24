import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import Events from "./EventCard";
export async function Event({ category }: { category: any }) {
  const supabase = createClient();
  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("category", category.id);
  console.log(events);

  return (
    <div className="flex m-2 md:m-10 gap-[60px] flex-wrap justify-center flex-col md:flex-row ">
      {events &&
        events.map((e) => (
          <>
            <Events e={e} />
          </>
          // <a href={`/events/${e.id}`}>
          //   <div
          //     className="felx m-2 gap-2  w-fit rounded-xl   bg-muted  shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg outline-none"
          //     key={e.name}
          //   >
          //     <Image
          //       src={e.banner_url && `${e.banner_url}`}
          //       alt={e.name}
          //       width={300}
          //       height={250}
          //     />
          //     <div className="flex flex-col ml-3 p-2 w-fit">
          //       <span className="text-sm text-muted-foreground">
          //         {e.start_date} | {e.start_time}
          //       </span>
          //       <h1 className="text-2xl font-bold">{e.name}</h1>
          //       <span className="text-sm text-muted-foreground">{e.venue}</span>
          //     </div>
          //   </div>
          // </a>
        ))}
    </div>
  );
}
