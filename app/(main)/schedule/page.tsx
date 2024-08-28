import { createClient } from "@/utils/supabase/server";
import React from "react";

async function Page() {
  const supabase = createClient();
  let { data, error } = await supabase.from("events").select("*");

  return (
    <div className="container mx-auto p-4 rounded-xl mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full  shadow-md rounded-xl border  overflow-hidden">
          <thead className="bg-gray-900">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">
                Time
              </th>
              <th className="py-3 px-6 text-left text-sm font-medium text-white uppercase tracking-wider">
                Venue
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-700">
            {data &&
              data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-900">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-white">
                    {item.category_name}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-white">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-white">
                    {item.start_date}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-white">
                    {item.start_time}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-white">
                    {item.venue}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
