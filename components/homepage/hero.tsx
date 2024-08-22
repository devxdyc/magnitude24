"use client";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div className="lg:w-[60%] p-5 h-[80vh] justify-center flex flex-col items-center mt-10">
      <motion.h1
        className="md:text-[35px] w-[80%] z-1   m-4 mb-8 text-center "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        "Welcome to{" "}
        <span className="text-primary font-semibold">Youthvibe 24</span>: The
        Ultimate Cultural Showdown of Universities!"
      </motion.h1>
      <motion.video
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="https://xfdopvchbkvknriiippu.supabase.co/storage/v1/object/public/publicBucket/Untitled_design.mp4?t=2024-07-13T19%3A46%3A05.367Z"
        autoPlay
        loop
        muted
        className="w-[100%] z-10  object-cover blur-sm "
      />
    </motion.div>
  );
}

export default Hero;
