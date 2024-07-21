"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
  >
    <Menu setActive={setActive}>
      <Link href={"/home"}>
      <MenuItem setActive={setActive} active={active} item="Home">
      </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Instuments">
        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Services">
      <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
          <HoveredLink href="/individual">Individual</HoveredLink>
          <HoveredLink href="/team">Team</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
        </div>
        </MenuItem>
        <Link href={"/contact"}>
      <MenuItem setActive={setActive} active={active} item="Contract Us">
      </MenuItem>
      </Link>
      
 </Menu>
  </div>
  )
}

export default Navbar
