import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide";

export default function Card({ team }: { team: any }) {
  return (
    <div className=" bg-muted overflow-hidden rounded-2xl">
      <div className="overflow-hidden pb-2 w-[300px] h-[300px] ">
        <Image
          alt="Card background"
          src={`${team.profile_url}`}
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{team.name}</p>

        <h4 className="font-bold text-large">{team.department}</h4>
      </div>
      <div className="flex gap-2 m-2 px-2">
        {team.linkedin_url && (
          <a href={team.linkedin_url}>
            {/* <Button className="bg-primary rounded-2xl text-primary-foreground p-2 w-full"> */}
            <LinkedInLogoIcon className="w-6 h-6" />
            {/* </Button> */}
          </a>
        )}
        {team.instagram_url && (
          <a href={team.instagram_url}>
            <InstagramLogoIcon className="w-6 h-6" />
          </a>
        )}
      </div>
      {team.email_address && (
        <div className="flex gap-2 m-2 px-2">
          <EnvelopeClosedIcon className="w-6 h-6" />
          <span>{team.email_address}</span>
        </div>
      )}
    </div>
  );
}
