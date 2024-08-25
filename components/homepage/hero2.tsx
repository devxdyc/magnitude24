"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold text-white">Wellcome to</h1>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {" "}
              Magni<span className="text-primary">tude 24</span>
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
          className="w-[100%] z-10  object-cover blur-sm "
        />
      </ContainerScroll>
    </div>
  );
}
