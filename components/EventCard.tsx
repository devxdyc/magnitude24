"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Events({ e }: { e: any }) {
  return (
    <motion.a
      className="rounded-xl overflow-hidden w-fit"
      href={`/events/${e.id}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1, boxShadow: "0px 0px 50px 2px rgba(100,10,10,0.9)" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 100px 2px rgba(100,10,10,0.8)",
      }}
    >
      <div
        className="felx m-2 gap-2  w-fit rounded-xl   shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg outline-none"
        key={e.name}
      >
        <Image
          src={e.banner_url && `${e.banner_url}`}
          alt={e.name}
          width={300}
          height={250}
        />
        <div className="flex flex-col ml-3 p-2 w-fit">
          <span className="text-sm text-muted-foreground">
            {e.start_date} | {e.start_time}
          </span>
          <h1 className="text-2xl font-bold">{e.name}</h1>
          <span className="text-sm text-muted-foreground">{e.venue}</span>
        </div>
      </div>
    </motion.a>
  );
}
