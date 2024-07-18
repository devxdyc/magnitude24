"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import GetStartedButton from "../animita/reg-now-btn";
import ArrowButton from "../animita/learn-more-btn";

function Slider({ events }: { events: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isHovering, setIsHovering] = useState(true);

  const isMobile = (): boolean => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    // if (!isHovering) {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex: any) =>
          prevIndex + 1 === events.length ? 0 : prevIndex + 1
        );
      }
    }, 2000);
    // }
    return () => clearInterval(interval);
  }, [isHovering]);
  const handleNext = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex + 1 === events.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex - 1 < 0 ? events.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <motion.div
        className=" p-5 flex flex-col  items-center overflow-hidden h-[100vh]  "
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <span className="m-5 text-4xl ">Featured Events</span>
        {/* //   <motion.img
            //     initial={{ opacity: 0, y: -1 }}
            //     animate={{ opacity: 1, y: 0 }}
            //     whileHover={{ scale: 1.1, zIndex: 100 }}
            //     src={event.banner_url}
            //     alt="event"
            //     className=" z-10  object-cover w-[100%] h-[300px] "
            //   /> */}

        <motion.div className="relative">
          {/* <AnimatePresence> */}
          {/* {events.map((event: any) => ( */}

          <div className="lg:w-[60vw] z-5 lg:h-[600px]">
            <motion.img
              initial={{ opacity: 0, y: -1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              loading="eager"
              key={events[currentIndex].name}
              src={events[currentIndex].banner_url}
              className=" lg:w-[60vw] z-5 lg:h-[600px] object-cover  "
            />
          </div>
          {/* //overlay div which shows while hovering */}
          {(isHovering || isMobile()) && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, zIndex: 100 }}
              transition={{ duration: 1 }}
              className="absolute z-100 bottom-0 flex justify-between  w-full lg:h-[40%]   bg-zinc-700/70   rounded-lg p-4"
            >
              <div className="lg:w-[80%]">
                <h1 className="text-primary md:text-4xl font-bold">
                  {events[currentIndex].name}
                </h1>
                <p className="text-white hidden md:flex md:text-lg  ml-4">
                  {events[currentIndex].short_description}
                </p>
              </div>
              {/* <div className="p-3"> */}
              {/* <motion.button
                initial={{ opacity: 0, y: 1 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2 }}
                className="bg-primary text-black px-4 py-2 rounded-lg"
              >
                Learn More
              </motion.button> */}
              {/* <Button className="rounded-md">Learn More</Button> */}
              <a href={`/events/${events[currentIndex].id}`}>
                <ArrowButton
                  text="Learn More"
                  className="md:p-4 md:w-[120px] w-[80px]  text-[10px] md:text-[15px] p-1"
                  borderColor="red"
                  textColor="red"
                  buttonOverlayColor="red"
                />
              </a>
              {/* </div> */}
            </motion.div>
          )}
          {/* ))} */}
          <div className="absolute inset-0 z-50 flex justify-between items-center ">
            <div
              className="p-2 bg-slate-600 rounded-2xl"
              onClick={handlePrevious}
            >
              <ChevronLeft />
            </div>
            <div className="p-2 bg-slate-600 rounded-2xl" onClick={handleNext}>
              <ChevronRight />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-110 flex justify-center p-4">
            <div className="rounded-2xl flex space-x-2">
              {events.map((_: any, index: any) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-2xl bg-slate-900 ${
                    currentIndex === index ? "w-3 h-3 bg-purple-700" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </div>
          {/* </AnimatePresence> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
