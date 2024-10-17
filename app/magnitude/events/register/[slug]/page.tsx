import CulturalRegistrationForm from "@/components/form/culturalform";
import EsportReg from "@/components/form/esportform";
import RegistrationForm from "@/components/form/normalform";
import PaidRegistrationForm from "@/components/form/paidform";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming you have a `Card` component in shadcn
import { FaRegSadTear } from "react-icons/fa"; // FontAwesome icon for illustration
import { Button } from "@/components/ui/button";

const RegistrationClosed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="max-w-md w-full shadow-lg rounded-lg border border-border bg-cardBackground">
        <CardHeader className="flex flex-col items-center text-center p-6">
          <FaRegSadTear className="w-16 h-16 text-primary" />
          <CardTitle className="text-3xl font-bold text-title mt-4">
            Registration Closed
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center p-6">
          <p className=" text-lg mb-6">
            The registration period has ended, but don't worry! Stay connected
            for upcoming events and updates.
          </p>
          <a href="https://www.instagram.com/youthvibe.lpu/" target="__blank">
            <Button className="text-white bg-accent hover:bg-accentHover py-2 px-4 rounded-xl transition-all">
              Stay Updated
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

async function page({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  let { data: events, error: eventerror } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.slug);
  if (events && events[0].reg_close === true) {
    return <RegistrationClosed />;
  }

  return (
    <div>
      {events && events[0].isPaid ? (
        <PaidRegistrationForm
          id={params.slug}
          eventname={events && events[0].name}
          price={events && events[0].price}
          qr={(events && events[0].qr) || ""}
          qrGuidelines={(events && events[0].qr_guidlines) || ""}
        />
      ) : (
        <RegistrationForm id={params.slug} />
      )}
    </div>
  );
}

export default page;
