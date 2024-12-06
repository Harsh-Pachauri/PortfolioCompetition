'use client'
// whenever there is UI manipulation
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
          <Link className="flex space-x-4" href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
          </Link>
          <Link className="flex space-x-4" href="/#skills">
        <MenuItem setActive={setActive} active={active} item="Skils">
        </MenuItem>
          </Link>
          <Link className="flex space-x-4" href="/#experiences">
        <MenuItem setActive={setActive} active={active} item="Experiences">
        </MenuItem>
          </Link>
          <Link className="flex space-x-4" href="/#projects">
        <MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem>
          </Link>

          <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
          </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
