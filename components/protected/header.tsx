"use client";
import Image from "next/image";
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
import ExternalLinkButton from "../animita/nsv-button";
import GetStartedButton from "../animita/reg-now-btn";

export default function Header() {
  return (
    <div className=" mt-3 flex justify-around items-center z-22 top-3 bg-transparent    px-8 gap-16 pt-2  p-2  left-0 w-full z-50">
      <a href="/" rel="noreferrer">
        <Image src="/image.png" alt="logo" width={150} height={50} />
      </a>
      <div className="flex  text-md gap-4">
        <nav className=" hidden  lg:flex gap-4 ">
          <ul className="flex gap-7">
            <li>
              <a
                href="/protected/events"
                rel="noreferrer"
                className="flex justify-center font-sm align-middle rounded-md overflow-hidden"
              >
                <ExternalLinkButton text="Events" />
              </a>
            </li>
            <li>
              <a href="/protected/category">
                <ExternalLinkButton text="Category" />
              </a>
            </li>
            <li>
              <a href="/protected/registration" rel="noreferrer">
                {/* <h2>events</h2> */}
                <ExternalLinkButton text="Registrations" />
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
                  <a href="/sponcers">
                    <h2>Sponcers</h2>
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

      <div>
        <h1 className=" text-primary font-extrabold text-2xl">Aryan Puri</h1>
      </div>

      {/* </div> */}
    </div>
  );
}
