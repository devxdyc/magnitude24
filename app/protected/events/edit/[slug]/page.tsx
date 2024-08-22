import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  DrawingPinFilledIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import EditEventForm from "./editform";

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.slug);

  const html = `<div class=" p-6 rounded-lg shadow-lg max-w-2xl">
    

    <div class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Details</h2>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Team Size:</strong> 3-5 members</li>
            <li><strong>Robot Weight Limit:</strong> 15 kg</li>
            <li><strong>Arena Size:</strong> 12x12 feet</li>
        </ul>
    </div>

    <div class="mb-8">
        <h2 class="text-xl font-semibold mb-2">Rules</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>The robot must fit within a 1-meter cube at the start of the match.</li>
            <li>Robots must be controlled manually. Autonomous robots are not allowed.</li>
            <li>Weapons are allowed but must not damage the arena.</li>
            <li>Flame-based weapons are prohibited.</li>
            <li>The match duration is 5 minutes.</li>
            <li>The robot must start in a designated starting zone.</li>
            <li>Teams are responsible for clearing any debris after their match.</li>
            <li>Teams must adhere to the safety guidelines provided by the organizers.</li>
            <li>Any team that breaches the rules will be disqualified immediately.</li>
        </ul>
    </div>

    <div>
        <h2 class="text-xl font-semibold mb-2">General Guidelines</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>Each team must have a team leader who will be the point of contact.</li>
            <li>All team members must carry their college/university ID cards.</li>
            <li>Teams should arrive at the venue 30 minutes before their scheduled match.</li>
            <li>Organizers are not responsible for any damage to robots during the event.</li>
            <li>Teams are encouraged to bring their own tools and spare parts.</li>
            <li>Participants must follow the instructions of the event coordinators at all times.</li>
            <li>Unsportsmanlike conduct will not be tolerated and may result in disqualification.</li>
            <!-- Add more guidelines here -->
        </ul>
    </div>
</div>`;
  if (events && events[0]) {
    return (
      <div>
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl">
            {events && events[0].name && events[0].name}
          </h1>
        </div>
        <div className="md:w-[800px] md:h-[380px] m-4 overflow-hidden">
          <Image
            src={events[0].banner_url && `${events[0].banner_url}`}
            alt={events[0].name}
            // layout="fill"
            width={800}
            height={280}
            objectFit="cover"
            className="rounded-lg shadow-lg bg-cover overflow-hidden"
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
              <a href={`/events/register/${events[0].id}`}>
                <Button className="bg-primary rounded-2xl text-primary-foreground  ">
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
        <div className=" p-6 rounded-lg shadow-lg  flex w-full  ">
          <EditEventForm event={events[0]} />
        </div>
      </div>
    );
  }
}
