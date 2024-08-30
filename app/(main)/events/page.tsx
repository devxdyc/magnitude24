import { Event } from "@/components/Events";
import Header from "@/components/Header";
import Mainloder from "@/components/homepage/loader";
import { createClient } from "@/utils/supabase/server";
import { data } from "autoprefixer";
import { Suspense } from "react";

export default async function Index() {
  const supabase = createClient();

  let { data: category, error } = await supabase.from("category").select("*");

  return (
    <Suspense fallback={<Mainloder />}>
      <div className="flex-1 w-full flex flex-col gap-20 p-20">
        {category &&
          category.map((category) => (
            <div key={category.name} className="flex flex-col ">
              <h1 className="text-4xl text-center font-bold w-auto">
                {category.name}
              </h1>

              <Event category={category} />
            </div>
          ))}
      </div>
    </Suspense>
  );
}
