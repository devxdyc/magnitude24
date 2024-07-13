import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function Event({ category }: { category: any }) {
  const supabase = createClient();
  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("category", category.id);
  console.log(events);

  return (
    <div className="flex m-2 md:m-10 flex-col md:flex-row ">
      {events &&
        events.map((e) => (
          <a href={`/events/${e.id}`}>
            <div
              className="felx m-2 gap-2  rounded-xl  md:max-w-[300px] md:min-w-[10vw] sm:max-w-[70vw] sm:min-w-[60vw] bg-muted  shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg outline-none"
              key={e.name}
            >
              <Image
                src={e.banner_url && `${e.banner_url}`}
                alt={e.name}
                width={300}
                height={250}
              />
              <div className="ml-3 p-2">
                <span className="text-sm text-muted-foreground">
                  {e.start_date} | {e.start_time}
                </span>
                <h1 className="text-2xl font-bold">{e.name}</h1>
                <span className="text-sm text-muted-foreground">{e.venue}</span>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}
