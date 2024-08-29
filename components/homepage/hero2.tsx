"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import CountdownTimer from "./Countdown";

export function HeroScroll() {
  return (
    <div className="flex flex-col items-center align-middle pt-20">
      {/* <CountdownTimer /> */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-3">
            <h1 className="md:text-4xl text-2xl font-semibold text-white">
              Welcome to
            </h1>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {" "}
              MAGNI<span className="text-primary">TUDE 24</span>
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
          src="/trailer.mp4"
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
