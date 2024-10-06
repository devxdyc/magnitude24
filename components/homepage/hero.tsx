"use client";
import React from "react";
import { motion } from "framer-motion";
import GetStartedButton from "../animita/reg-now-btn";
import { redirect } from "next/navigation";
function Hero() {
  return (
    <motion.div className="lg:w-[60%] p-5 h-[70vh] justify-center flex flex-col items-center mt-10">
      <motion.a
        className=" w-full flex justify-center "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="/magnitude/events" className="w-full flex justify-center">
          <button className="md:text-[15px] w-[80%]  z-1 p-3 px-4 rounded-2xl   m-4 mb-8 text-xl text-center border border-primary">
            Register Now
          </button>
        </a>
      </motion.a>
      <motion.h1
        className="md:text-[35px] w-[80%] z-1   m-4 mb-8 text-3xl text-center "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to MAGNI
        <span className="text-primary font-semibold">TUDE 24</span>
      </motion.h1>

      <motion.video
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="https://xfdopvchbkvknriiippu.supabase.co/storage/v1/object/public/publicBucket/Untitled_design.mp4?t=2024-07-13T19%3A46%3A05.367Z"
        autoPlay
        loop
        muted
        playsInline
        className="w-[100%] z-10  object-cover blur-sm "
      />
    </motion.div>
  );
}

export default Hero;
