import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import React from "react";

async function page() {
  const supabase = createClient();

  let { data: sponcers, error } = await supabase.from("sponsors").select("*");

  console.log(sponcers);
  return (
    <div>
      <div className="flex flex-wrap gap-6  justify-center">
        {sponcers &&
          sponcers.map((sponcers) => (
            <div className="flex flex-col bg-muted rounded-xl p-3 items-center justify-center">
              <Image
                src={`${sponcers.logo_url}`}
                width={200}
                height={200}
                alt="logo"
              />
              <h1 className="text-2xl ">{sponcers.name}</h1>
              <p>{sponcers.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default page;
