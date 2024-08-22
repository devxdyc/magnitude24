"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  registrationNumber: z
    .string()
    .min(8, { message: "registration number must be at least 8 characters" })
    .max(8, { message: "registration number must be at most 8 characters" }),
  course: z
    .string()
    .min(2, { message: "course must be at least 2 characters." }),
  dateOfBirth: z
    .string()
    .max(8, { message: "date of birth must be in the past" }),
  contactNumber: z
    .number()
    .min(10, { message: "contact number must be at least 10 characters" }),
  whatsappNumber: z
    .number()
    .min(10, { message: "whatsapp number must be at least 10 characters" }),
  emailAddress: z.string().email({ message: "invalid email address" }),
  referral: z.string(),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      registrationNumber: "",
      course: "",
      dateOfBirth: "",
      contactNumber: 0,
      whatsappNumber: 0,
      emailAddress: "",
      referral: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  const formjson = [
    "name",
    "registrationNumber",
    "course",
    "dateOfBirth",
    "contactNo",
    "whatsappNo",
    "email",
    "referral",
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registrationNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>registrationNumber</FormLabel>
              <FormControl>
                <Input
                  placeholder="registrationNumber"
                  type="number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>course</FormLabel>
              <FormControl>
                <Input placeholder="course" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>dateOfBirth</FormLabel>
              <FormControl>
                <Input placeholder="dateOfBirth" type="date" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
