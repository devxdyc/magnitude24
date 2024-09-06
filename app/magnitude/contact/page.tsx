"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "@/components/ui/use-toast";

async function page() {
  const supabase = createClient();
  const { toast } = useToast();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const thoughtsRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const thoughts = thoughtsRef.current?.value || "";

    if (name && email && thoughts) {
      const { data, error } = await supabase
        .from("contact")
        .insert([{ name, email, query: thoughts }]);

      if (error) {
        toast({
          title: "Error",
          description: "Enter valid data",
        });
      } else {
        console.log("Data inserted successfully:", data);

        toast({
          title: "Sucess",
          description: "We got your query.",
        });
        nameRef.current && (nameRef.current.value = "");
        emailRef.current && (emailRef.current.value = "");
        thoughtsRef.current && (thoughtsRef.current.value = "");
      }
    } else {
      toast({
        title: "Enter Valid Data",
      });
    }
  };

  return (
    <div className="p-10 flex gap-2 h-[90vh] align-middle justify-center items-center">
      <div className="flex flex-col gap-2 p-5 min-w-[28vw] justify-around">
        <h1 className="text-primary font-bold text-4xl">Get In Touch</h1>
        <p>We are here for you! How can we help?</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-6">
          <Input
            type="text"
            className="rounded-xl"
            placeholder="Enter Your Name"
            ref={nameRef}
          />
          <Input
            className="rounded-xl"
            type="email"
            placeholder="Enter Your Email"
            ref={emailRef}
          />
          <Textarea
            className="rounded-xl"
            placeholder="Share your thoughts...."
            ref={thoughtsRef}
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground flex justify-center rounded-xl p-2 font-semibold text-xl"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="hidden md:flex flex-col justify-around gap-4 p-5">
        <Image src="/logo/dyc.jpg" alt="dyc-logo" width={200} height={200} />
        <div className="flex gap-3 flex-col">
          <div className="flex gap-2">
            <MapPin />
            <h3>Block 13 Room 206 LPU</h3>
          </div>
          <div className="flex gap-2">
            <PhoneCall />
            <h3>9608484663</h3>
          </div>
          <div className="flex gap-2">
            <Mail />
            <h3>youthcapital24@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
