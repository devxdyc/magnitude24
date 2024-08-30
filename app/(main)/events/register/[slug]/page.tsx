"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/extras/label";
import { Input } from "@/components/extras/input";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";
import sendMail from "@/lib/mail";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  regnumber: z
    .string()
    .min(8, "Enter valid registration number")
    .max(8, "Enter valid registration number"),
  contactnumber: z
    .string()
    .min(10, "Contact number must be 10 digits")
    .max(10, "Contact number must be 10 digits"),
  hostler: z.string().nonempty("Hostler or day scholar is required"),
  cource: z.string().nonempty("Course is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm({
  params,
}: {
  params: { slug: string };
}) {
  const eventname = useSearchParams().get("name");
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);
  const supabase = createClient();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const { name, email, regnumber, contactnumber, hostler, cource } = data;

    let { data: events, error: eventerror } = await supabase
      .from("events")
      .select("*")
      .eq("id", params.slug);
    const { error } = await supabase
      .from("registration")
      .insert([
        {
          event_id: params.slug,
          event_name: eventname,
          name,
          email,
          registration_number: regnumber,
          contact_number: contactnumber,
          hostler,
          cource,
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
        name,
        subject: "Registration successful",
        html: `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="600px" cellpadding="0" cellspacing="0" border="0"
                    style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <tr>
                        <td style="padding: 20px; background-color: #fc0505; text-align: center; color: #ffffff;">
                            <h1 style="margin: 0; font-size: 28px;">Magnitude 2024</h1>
                            <p style="margin: 5px 0 0;">Thank you for registering!</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <h2 style="font-size: 24px; margin-top: 0;">Hello ${name},</h2>
                            <p style="font-size: 16px; line-height: 1.6;">
                                We are thrilled to confirm your registration for <strong>Magnitude 2024</strong>! Get
                                ready to be a part of an incredible experience filled with innovation, creativity, and
                                excitement.
                            </p>
                            <p style="font-size: 16px; line-height: 1.6;">
                                Here are the details of your registration:
                            </p>
                            <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px; list-style-type: disc;">
                                <li><strong>Event Name:</strong> ${eventname}</li>
                                <li><strong>Date:</strong> ${
                                  events && events[0].start_date
                                }</li>
                                <li><strong>Time:</strong> ${
                                  events && events[0].start_time
                                }</li>
                                <li><strong>Location:</strong> ${
                                  events && events[0].venue
                                }</li>
                            </ul>
                            <p style="font-size: 16px; line-height: 1.6;">
                                We look forward to seeing you at the event. If you have any questions, feel free to
                                <a href="mailto:magnitude.dyc@gmail.com" style="color: #4CAF50; text-decoration: none;">contact us</a>.
                            </p>
                            <p style="font-size: 16px; line-height: 1.6;">
                                Stay updated with the latest news and announcements by following us on
                                <a href="https://www.facebook.com/share/ZTTRJrmEbawLHGjB/?mibextid=LQQJ4d" style="color: #4CAF50; text-decoration: none;">Facebook</a>,
                                <a href="https://www.linkedin.com/company/youthvibelpu/" style="color: #4CAF50; text-decoration: none;">Linkedin</a>,
                                and <a href="https://www.instagram.com/youthvibe.lpu?igsh=MXZqbWJhNnFyaXoyMw==" style="color: #4CAF50; text-decoration: none;">Instagram</a>.
                            </p>
                            <p style="font-size: 16px; line-height: 1.6;">
                                See you at Magnitude 2024!
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #f4f4f4; text-align: center;">
                            <p style="font-size: 14px; color: #888;">
                                &copy; 2024 Magnitude. All rights reserved.
                            </p>
                            
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>`,
      });

      toast({
        title: "Success",
        description: "Registration Sucessfull",
      });
      setSubmitted(true);
    }
  };
  if (submitted) {
    return (
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-primary shadow m-10 ">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Registration successful
        </h2>
        <a href="/">
          <button>Return To Home</button>
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  m-10 ">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Register for {eventname}
      </h2>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Tyler"
            type="text"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="regnumber">Registration Number</Label>
          <Input
            id="regnumber"
            placeholder=""
            type="text"
            {...register("regnumber")}
          />
          {errors.regnumber && (
            <p className="text-red-500">{errors.regnumber.message}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="contactnumber">Contact Number</Label>
          <Input
            id="contactnumber"
            placeholder=""
            type="text"
            {...register("contactnumber")}
          />
          {errors.contactnumber && (
            <p className="text-red-500">{errors.contactnumber.message}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="cource">Course</Label>
          <Input
            id="cource"
            placeholder=""
            type="text"
            {...register("cource")}
          />
          {errors.cource && (
            <p className="text-red-500">{errors.cource.message}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="hostler">Residence</Label>
          {/* <Input
            id="hostler"
            placeholder=""
            type=""
            {...register("hostler")}
          /> */}
          <select
            {...register("hostler")}
            className="bg-gray-50  text-gray-900 text-sm  focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-zinc-900  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary px-3 py-2 rounded-xl "
          >
            <option
              value="hostler"
              className="bg-transparent text-foreground p-2"
            >
              Hostler
            </option>
            <option
              value="day scholar"
              className="bg-transparent text-foreground p-2"
            >
              Day Scholar
            </option>
          </select>
          {errors.hostler && (
            <p className="text-red-500">{errors.hostler.message}</p>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-lg h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit →"}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
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
