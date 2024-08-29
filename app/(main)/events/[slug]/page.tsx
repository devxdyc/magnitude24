import { createClient } from "@/utils/supabase/server";
import { useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  DrawingPinFilledIcon,
  PinBottomIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide";
import { redirect } from "next/dist/server/api-utils";
export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.slug);
  console.log(events);

  const html = String(events && events[0].guidlines) || "";
  if (events && events[0]) {
    return (
      <div className="py-20">
        <div className="text-center mb-8 ">
          <h1 className="text-5xl text-center font-bold w-auto font-sans">
            {events && events[0].name && events[0].name}
          </h1>
        </div>
        <div className="md:w-[800px] md:h-[380px] m-4 overflow-hidden">
          <Image
            src={events[0].banner_url && `${events[0].square_url}`}
            alt={events[0].name}
            // layout="fill"
            width={800}
            height={180}
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg object-center shadow-lg bg-cover overflow-hidden"
          />
        </div>
        <div className="bg-muted p-1 m-2 rounded-xl">
          <div className="flex w-[100%] justify-between p-2">
            <div className="flex gap-2">
              <CalendarIcon className="w-6 h-6" />
              <span className="ml-2">{events[0].start_date}</span>
            </div>
            <div className="flex gap-2">
              <ClockIcon className="w-6 h-6" />
              <span className="ml-2">{events[0].start_time}</span>
            </div>
          </div>
          <div className="flex w-[100%] justify-between p-2 mt-2">
            <div className="flex gap-2">
              <DrawingPinFilledIcon className="w-6 h-6" />
              <span className="ml-2">{events[0].venue}</span>
            </div>
            <div>
              <a
                href={`/events/register/${events[0].id}?name=${events[0].name}`}
              >
                <Button className="bg-primary rounded-2xl text-primary-foreground  ">
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[800px] p-4 bg-transparent rounded shadow-md">
          {events[0].long_description}
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="md:w-[800px]"
        ></div>
      </div>
    );
  }
}
