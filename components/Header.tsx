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

export default function Header() {
  return (
    <div className="flex justify-between items-center z-22   px-8 gap-16 pt-2 w-full p-2  mb-3  border border-white/20 border-b border-gray-300">
      <a href="/" rel="noreferrer">
        <Image src="/image.png" alt="logo" width={150} height={150} />
      </a>
      <div className="flex gap-4">
        <nav className=" hidden  md:flex gap-4 ">
          <ul className="flex gap-4">
            <li>
              <a href="/" rel="noreferrer">
                <h2>home</h2>
              </a>
            </li>
            <li>
              <a href="/events" rel="noreferrer">
                <h2>events</h2>
              </a>
            </li>
            <li>
              <a href="/faqs">
                <h2>faqs</h2>
              </a>
            </li>
            <li>
              <a href="/team">
                <h2>team</h2>
              </a>
            </li>
            <li>
              <a href="/sponcers">
                <h2>sponcers</h2>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden">
          <Menubar className="border-0">
            <MenubarMenu>
              <MenubarTrigger>
                <HamburgerMenuIcon height={30} width={30} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <a href="/" rel="noreferrer">
                    <h2>home</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/events" rel="noreferrer">
                    <h2>events</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/faqs">
                    <h2>faqs</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/team">
                    <h2>team</h2>
                  </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <a href="/sponcers">
                    <h2>sponcers</h2>
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
      </div>
    </div>
  );
}
