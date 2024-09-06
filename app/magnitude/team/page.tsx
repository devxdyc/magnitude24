import Card from "@/components/card";
import React from "react";
const { createClient } = require("@/utils/supabase/server");

async function page() {
  const supabase = createClient();
  let { data: team, error } = await supabase.from("team").select("*");
  return (
    <div className="flex p-10  items-center justify-center flex-col">
      <h1 className="text-3xl my-7">Meet the team😁🐕</h1>
      <div className=" lg:max-w-[80%] flex items-center justify-center gap-9 flex-wrap">
        {team && team.map((team: any) => <Card team={team} />)}
      </div>
    </div>
  );
}

export default page;
