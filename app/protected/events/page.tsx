import React from "react";
import { createClient } from "@/utils/supabase/server";
import {
  BookCopy,
  CirclePlus,
  FileSpreadsheetIcon,
  Pencil,
} from "lucide-react";
import { FileSpreadsheet } from "lucide";
import { Button } from "@/components/ui/button";

async function page() {
  const supabase = createClient();
  const { data: events } = await supabase.from("events").select("*");
  return (
    <div className="mt-8">
      <div className="flex justify-end px-5 m-3 gap-2 ">
        <Button className="rounded-xl font-semibold">
          <span>Add Event</span>
          <CirclePlus className="w-4 ml-1 h-4" />
        </Button>
      </div>
      <div className="rounded-xl border border-muted overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700  ">
          <thead className="bg-slate-500/30">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium  uppercase tracking-wider"
              >
                Event Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium uppercase tracking-wider"
              >
                Start Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium uppercase tracking-wider"
              >
                category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium uppercase tracking-wider"
              >
                event head
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium uppercase tracking-wider"
              >
                Edit
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium uppercase tracking-wider"
              >
                Form
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-md font-medium uppercase tracking-wider"
              >
                Registrtion
              </th>
            </tr>
          </thead>
          <tbody className=" bg-slate-900/10 divide-y divide-gray-800 font-semibold text-xl">
            {events &&
              events.map((event) => (
                <tr key={event.id} className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    {event.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {event.start_date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {event.category_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    {event.event_head}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    <a href={`/protected/events/edit/${event.id}`}>
                      <Pencil />
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm ">
                    <a href={`/protected/events/form/${event.id}`}>
                      <BookCopy />
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                    <a href={`/protected/events/edit/${event.id}`}>
                      <FileSpreadsheetIcon />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
