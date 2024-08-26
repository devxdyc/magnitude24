"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import CountdownTimer from "./Countdown";

export function HeroScroll() {
  return (
    <div className="flex flex-col items-center align-middle overflow-hidden pt-20">
      {/* <CountdownTimer /> */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl font-semibold text-white">Welcome to</h1>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {" "}
              Magni<span className="text-primary">tude 24</span>
              {/* <Image
                src={"/logo/magnitude-text-2.png"}
                width={900}
                height={200}
                alt="logo"
              /> */}
            </span>
          </div>
        }
      >
        <video
          src="https://xfdopvchbkvknriiippu.supabase.co/storage/v1/object/public/publicBucket/Untitled_design.mp4?t=2024-07-13T19%3A46%3A05.367Z"
          autoPlay
          loop
          playsInline
          muted
          className="w-[100%] z-10   object-cover blur-sm "
        />
      </ContainerScroll>
    </div>
  );
}
