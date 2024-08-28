"use client";
import Image from "next/image";
import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ArrowDownLeftSquare, ArrowUpRight } from "lucide";
import ExternalLinkButton from "./animita/nsv-button";
import GetStartedButton from "./animita/reg-now-btn";

export default function Header() {
  return (
    <div className=" mt-3 flex justify-around items-center z-22 top-3 bg-transparent    px-8 gap-16 pt-2  p-2  left-0 w-full z-50">
      <a href="/" rel="noreferrer">
        <h1 className="text-2xl md:text-4xl font-bold">
          MAGNI<span className="text-primary">TUDE</span>
        </h1>
      </a>
      <div className="flex  text-md gap-4">
        <nav className=" hidden  lg:flex gap-4 ">
          <ul className="flex gap-7">
            <li>
              <a
                href="/"
                rel="noreferrer"
                className="flex justify-center font-sm align-middle rounded-md overflow-hidden"
              >
                <ExternalLinkButton text="Home" />
              </a>
            </li>
            <li>
              <a href="/about">
                <ExternalLinkButton text="About" />
              </a>
            </li>
            <li>
              <a href="/events" rel="noreferrer">
                {/* <h2>events</h2> */}
                <ExternalLinkButton text="Events" />
              </a>
            </li>
            <li>
              <a href="/team">
                <ExternalLinkButton text="Team" />
              </a>
            </li>
            <li>
              <a href="/sponsors">
                <ExternalLinkButton text="Sponsors" />
              </a>
            </li>
            <li>
              <a href="/contact">
                <ExternalLinkButton text="Contact" />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="lg:hidden">
          <Menubar className="border-0">
            <MenubarMenu>
              <MenubarTrigger>
                <HamburgerMenuIcon height={30} width={30} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <a href="/" rel="noreferrer">
                    <h2>Home</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/about">
                    <h2>About</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/events" rel="noreferrer">
                    <h2>Events</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/team">
                    <h2>Team</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/sponcors">
                    <h2>Sponcors</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/contact">
                    <h2>contact</h2>
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
      </div>

      {/* <div className="flex gap-4 rounded-lg overflow-hidden"> */}
      <a href="/events" className="hidden md:block">
        {/* <GetStartedButton text="Register Now" /> */}
        <Image src={"/logo/dyc.jpg"} alt="dyc-logo" width={100} height={100} />
      </a>
      {/* </div> */}
    </div>
  );
}
