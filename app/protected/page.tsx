import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { Event } from "@/components/Events";

export default async function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="flex flex-col items-center gap-8"></div>
    </div>
  );
}
