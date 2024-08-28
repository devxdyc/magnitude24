"use client";
import React from "react";
import { Label } from "@/components/extras/label";
import { Input } from "@/components/extras/input";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { z } from "zod";

import { createClient } from "@/utils/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";
import sendMail from "@/lib/mail";

export default function RegistrationForm({
  params,
}: {
  params: { slug: string };
}) {
  const eventname = useSearchParams().get("name");
  const { toast } = useToast();
  const supabase = createClient();
  // let { data: events, error } = await supabase
  //   .from("events")
  //   .select("*")
  //   .eq("id", params.slug);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [regnumber, setRegnumber] = React.useState("");
  const [contactnumber, setContactnumber] = React.useState("");
  const [hostler, setHostler] = React.useState("");
  const [cource, setcource] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  // const formSchema = z.object({
  //   name: z.string().nonempty("Name is required"),
  //   email: z.string().email("Invalid email address"),
  //   regnumber: z.string().nonempty("Registration number is required"),
  //   contactnumber: z.string().nonempty("Contact number is required"),
  //   hostler: z.string().nonempty("Hostler or day scholar is required"),
  // });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault();

    const { data, error } = await supabase
      .from("registration")
      .insert([
        {
          event_id: params.slug,
          event_name: eventname,
          name: name,
          email: email,
          registration_number: regnumber,
          contact_number: contactnumber,
          hostler: hostler,
          cource: cource,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting data", error);
      toast({
        title: "Error",
        description: "Enter valid data",
      });
    } else {
      await sendMail({
        to: email,
        name: name,
        subject: "Registration successful",
        html: `<h1>Registration successful</h1><p>Thank you for registering for ${eventname}</p>`,
      });
      setSubmitted(true);

      toast({
        title: "Success",
        description: "Data inserted successfully",
      });
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-primary shadow m-10 ">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Thank you for registering for {eventname}
        </h2>
      </div>
    );
  } else {
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-primary shadow m-10 ">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Register for {eventname}
        </h2>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="regnumber">Registration Number</Label>
            <Input
              id="regnumber"
              placeholder=""
              type="text"
              value={regnumber}
              onChange={(e) => setRegnumber(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="contactnumber">Contact Number</Label>
            <Input
              id="contactnumber"
              placeholder=""
              type="text"
              value={contactnumber}
              onChange={(e) => setContactnumber(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="hostler">Cource</Label>
            <Input
              id="hostler"
              placeholder=""
              type="text"
              value={cource}
              onChange={(e) => setcource(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="hostler">Hostler or day scholar</Label>
            <Input
              id="hostler"
              placeholder=""
              type="text"
              value={hostler}
              onChange={(e) => setHostler(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-lg h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit →"}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    );
  }
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full py-2", className)}>
      {children}
    </div>
  );
};
