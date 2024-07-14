"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkels"; // Make sure the file path is correct and the module is installed.

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md absolute">
      <h1 className="md:text-7xl text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
        youth<span className="text-primary">vibe</span>
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_30%,white)]"></div>
      </div>
    </div>
  );
}
