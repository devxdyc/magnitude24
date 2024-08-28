"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";
import Image from "next/image";

export function AnimatedPin() {
  return (
    <div className="min-h-[40rem] w-full flex flex-wrap items-center gap-2 justify-center ">
      <PinContainer
        title="www.linkedin.com/company/youthvibelpu/"
        href="https://www.linkedin.com/company/youthvibelpu/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Linkedin
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">Follow us on Linkedin.</span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500 via-slate-800 to-blue-500" />
           */}
          <div className="p-2">
            <Image
              src={"/socials/linkdin.png"}
              width={500}
              height={500}
              alt="linkedin"
            />
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="/instagram.com/youthvibe.lpu"
        href="https://www.instagram.com/youthvibe.lpu/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold flex  text-base text-slate-100">
            Instagram
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">Follow us on Instagram.</span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500 via-slate-800 to-blue-500" /> */}

          <Image
            src={"/socials/instagram.png"}
            width={500}
            height={500}
            alt="instagram"
          />
        </div>
      </PinContainer>
      <PinContainer
        title="www.facebook.com"
        href="https://www.facebook.com/share/ZTTRJrmEbawLHGjB/?mibextid=LQQJ4d"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Facebook
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">Follow us on Facebook.</span>
          </div>
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-500 via-slate-800 to-blue-500" /> */}

          <Image
            src={"/socials/facebook.png"}
            width={500}
            height={500}
            alt="facebook"
          />
        </div>
      </PinContainer>
    </div>
  );
}
