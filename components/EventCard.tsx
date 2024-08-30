"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function Events({ e }: { e: any }) {
  return (
    <motion.a
      className="rounded-xl overflow-hidden w-fit"
      href={`/events/${e.id}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1, boxShadow: "0px 0px 50px 2px rgba(10,10,10,1)" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 100px 2px rgba(100,10,10,0.8)",
      }}
      key={e.id}
    >
      <div
        className="felx m-2 gap-2  w-fit rounded-xl   shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg outline-none"
        key={e.name}
      >
        <Suspense fallback={skeloton()}>
          <Image
            src={e.banner_url && `${e.square_url}`}
            alt={e.name}
            width={250}
            height={250}
          />
        </Suspense>
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

const skeloton = () => {
  return (
    <div className="flex items-center justify-center h-[250px] w-[250px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
      <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 20"
      >
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
      </svg>
    </div>
  );
};
