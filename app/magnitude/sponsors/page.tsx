import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import React from "react";

async function page() {
  const supabase = createClient();

  const sponcers = [
    {
      logo_url: "/logo/coke.png",
      name: "coke",
      title: "",
    },
    {
      logo_url: "/logo/ccd.png",
      name: "Café Coffee Day",
      title: "",
    },
    {
      logo_url: "/logo/ubon.jpg",
      name: "UBON",
      title: "",
    },
    {
      logo_url: "/logo/amazoncom.png",
      name: "Amazon",
      title: "",
    },
    {
      logo_url: "/logo/ktm.png",
      name: "KTM",
      title: "",
    },
    {
      logo_url: "/logo/canon.png",
      name: "Canon",
      title: "",
    },
    {
      logo_url: "/logo/ebay.png",
      name: "Ebay",
      title: "",
    },
    {
      logo_url: "/logo/mtv.png",
      name: "Mtv",
      title: "",
    },
  ];
  console.log(sponcers);
  return (
    <div className="flex flex-col justify-center w-full ">
      <h1 className="text-3xl my-7 text-center">Our Sponsors</h1>
      <div className="flex flex-wrap gap-10 p-10 lg:px-64 align-middle justify-center">
        {sponcers &&
          sponcers.map((sponcers) => (
            <div
              key={sponcers.name}
              className="flex flex-col bg-muted rounded-xl p-3 items-center justify-center"
            >
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
