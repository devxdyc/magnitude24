import { createClient } from "@/utils/supabase/server";
import React from "react";

async function Page() {
  const supabase = createClient();
  let { data, error } = await supabase.from("events").select("*");

  // return (
  //   <div className="overflow-x-auto">
  //     <table className="min-w-full table-auto bg-transparent border-collapse shadow-lg rounded-lg">
  //       <thead className="bg-neutral-50/30 backdrop-blur-sm text-gray-900">
  //         <tr>
  //           <th className="border-b-2 border-neutral-300 px-4 py-3 text-left text-lg font-semibold">
  //             Event Names
  //           </th>
  //           <th className="border-b-2 border-neutral-300 px-4 py-3 text-left text-lg font-semibold">
  //             Dates
  //           </th>
  //           <th className="border-b-2 border-neutral-300 px-4 py-3 text-left text-lg font-semibold">
  //             Venue
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody className="divide-y divide-neutral-200/50">
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">StepSync (Dance)</td>
  //           <td className="px-4 py-3">
  //             Auditions - 12 October 2024
  //             <br />
  //             Round 1 - 14 October 2024
  //             <br />
  //             Finale - 18 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - Shanti Devi Mittal Auditorium
  //             <br />
  //             Round 1 - Unipolis
  //             <br />
  //             Finale - Unipolis
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Voice Of Magnitude (Singing)
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - 11 October 2024
  //             <br />
  //             Round 1 - 15 October 2024
  //             <br />
  //             Finale - 18 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - Uni-Auditorium
  //             <br />
  //             Round 1 - Unipolis
  //             <br />
  //             Finale - Unipolis
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             SoundScape (Instrumental)
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - 11 October 2024
  //             <br />
  //             Round 1 - 15 October 2024
  //             <br />
  //             Finale - 18 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - Uni-Auditorium
  //             <br />
  //             Round 1 - Unipolis
  //             <br />
  //             Finale - Unipolis
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">Mag Gala (Fashion Walk)</td>
  //           <td className="px-4 py-3">
  //             Auditions - 11 October 2024
  //             <br />
  //             Round 1 - 16 October 2024
  //             <br />
  //             Finale - 18 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - Shanti Devi Mittal Auditorium
  //             <br />
  //             Round 1 - Unipolis
  //             <br />
  //             Finale - Unipolis
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Stitch & Style (Dress Making)
  //           </td>
  //           <td className="px-4 py-3">Single Round - 16 October 2024</td>
  //           <td className="px-4 py-3">Single Round - Unipolis</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">AdVision (Videography)</td>
  //           <td className="px-4 py-3">
  //             Video Submission - 3 October 2024
  //             <br />
  //             Video Posting - 4 October 2024
  //             <br />
  //             Result - 15 October 2024
  //           </td>
  //           <td className="px-4 py-3">Single Round - Online</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Frame & Focus (Photography)
  //           </td>
  //           <td className="px-4 py-3">
  //             Photo Submission - 4 October 2024
  //             <br />
  //             Photo Posting - 5 October 2024
  //             <br />
  //             Result - 16 October 2024
  //           </td>
  //           <td className="px-4 py-3">Single Round - Online</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Open Mic (Public Speaking + Theatre + Stand up)
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - 12 October 2024
  //             <br />
  //             Round 1 - 16 October 2024
  //             <br />
  //             Finale - 18 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - Uni-Auditorium
  //             <br />
  //             Round 1 - Unipolis
  //             <br />
  //             Finale - Unipolis
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">Pod-A-Cast (Podcast)</td>
  //           <td className="px-4 py-3">
  //             Auditions - 11 October 2024
  //             <br />
  //             Finale - 15 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - AV Room or Lecture Hall
  //             <br />
  //             Finale - Block 13 (AV Room)
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             The News Debate (Discussion)
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - 12 October 2024
  //             <br />
  //             Finale - 15 October 2024
  //           </td>
  //           <td className="px-4 py-3">
  //             Auditions - News Room 19-605/19-508
  //             <br />
  //             Finale - News Room 19-605/19-508
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">Brush Stroke (Drawing)</td>
  //           <td className="px-4 py-3">Single Round - 14 October 2024</td>
  //           <td className="px-4 py-3">
  //             Single Round - Sunken Garden / Admission Stairs
  //           </td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Aesthetic Arts (Prop & Craft Making)
  //           </td>
  //           <td className="px-4 py-3">Single Round - 16 October 2024</td>
  //           <td className="px-4 py-3">Single Round - Unipolis</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Face Palette (Face Painting)
  //           </td>
  //           <td className="px-4 py-3">Single Round - 16 October 2024</td>
  //           <td className="px-4 py-3">Single Round - Unipolis</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">HackMaster (CTF)</td>
  //           <td className="px-4 py-3">Single Round - 14 October 2024</td>
  //           <td className="px-4 py-3">Single Round - Innovation Studio</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Startup Spotlight (Startup Pitch Idea)
  //           </td>
  //           <td className="px-4 py-3">Single Round - 14 October 2024</td>
  //           <td className="px-4 py-3">Single Round - 14-101L</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">
  //             Product Expo (Product Idea)
  //           </td>
  //           <td className="px-4 py-3">Single Round - 14 October 2024</td>
  //           <td className="px-4 py-3">Block 14 Entrance</td>
  //         </tr>
  //         <tr className="hover:bg-neutral-50/50 transition duration-300">
  //           <td className="px-4 py-3  font-medium">QuizOMania (Quiz)</td>
  //           <td className="px-4 py-3">
  //             Round 1 - 14 October 2024
  //             <br />
  //             Round 2 - 16 October 2024
  //           </td>
  //           <td className="px-4 py-3">Block 32-301 & 302</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return (
    <div className="container mx-auto p-4 rounded-xl mt-6">
      <div className="overflow-x-auto border rounded-xl border-gray-100 overflow-hidden ">
        <table className="min-w-full  shadow-md rounded-xl border  overflow-hidden border-zinc-300">
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
              <th className="py-3 px-6 text-left text-sm fonhjt-medium text-white uppercase tracking-wider">
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
