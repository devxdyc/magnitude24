import RegistrationForm from "@/components/form/normalform";
import PaidRegistrationForm from "@/components/form/paidform";
import { createClient } from "@/utils/supabase/server";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  let { data: events, error: eventerror } = await supabase
    .from("events")
    .select("*")
    .eq("id", params.slug);

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
