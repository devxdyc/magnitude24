import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MapPinOffIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="p-10 flex gap-2  h-[90vh] align-middle justify-center items-center ">
      <div className="flex flex-col gap-2 p-5 min-w-[28vw] justify-around ">
        <h1 className="text-primary font-bold text-4xl">Get In Touch</h1>
        <p>We are here for you! How can we help?</p>
        <div className="flex flex-col gap-3 py-6">
          <Input
            type="text"
            className="rounded-xl"
            placeholder="Enter Your Name"
          />
          <Input
            className="rounded-xl"
            type="email"
            placeholder="Enter Your Email"
          />
          <Textarea
            className="rounded-xl"
            placeholder="Go ahead we are listening...."
          />
        </div>
        <button className="bg-primary text-primary-foreground flex justify-center  rounded-xl p-2 font-semibold text-xl  ">
          submit
        </button>
      </div>
      <div className="hidden md:flex flex-col  justify-around gap-2 p-5">
        <Image src="/Magnitude.png" alt="dyc-logo" width={200} height={200} />
        <div className="flex gap-3 flex-col">
          <div className="flex gap-2">
            <MapPin />
            <h3>Block 13 Room 206 LPU</h3>
          </div>
          <div className="flex gap-2">
            <PhoneCall />
            <h3>9997776661</h3>
          </div>
          <div className="flex gap-2">
            <Mail />
            <h3>youthcapital@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
