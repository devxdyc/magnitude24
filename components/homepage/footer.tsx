"use client";
import React, { useRef } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  calcLength,
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Footer() {
  const ref = useRef(null);
  return (
    <div ref={ref} className="flex justify-center">
      {
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ width: "100%" }}
          className=" bg-slate-900/40 text-white pb-8 rounded-t-[50px]"
        >
          <div className="container flex-col-reverse md:flex-row flex w-full md:justify-around justify-between p-10 mx-auto ">
            <div className="lg:w-[60%] flex flex-col  gap-3">
              <span className="text-primary sm:text-xs">Get Updates</span>
              <h1 className="md:text-3xl text-sm">Provide Us Your email</h1>
              <Input placeholder="Enter your email" className="rounded-xl " />
            </div>
            <div className="flex  items-center  p-4 justify-center">
              <Image src="/image.png" alt="logo" width={150} height={50} />
            </div>
          </div>
          <hr className="border-t-1 mt-2 mb-2 border-slate-500" />
          <div className="flex w-full justify-around pb-4">
            <div>
              <ul className="hidden md:flex flex-col gap-1 ">
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Sponcers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-1">
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-primary">Let's connect</h1>
              <span>youthvibe@gmail.com</span>
              <div className="flex gap-4 ">
                <InstagramLogoIcon />
                <TwitterLogoIcon />
                <LinkedInLogoIcon />
                <InstagramLogoIcon />
              </div>
            </div>
          </div>
        </motion.footer>
      }
    </div>
  );
}

export default Footer;
