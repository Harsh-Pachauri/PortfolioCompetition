"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils/cn";

export default function AboutMe() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center rounded-lg shadow-lg">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated background boxes */}
      <Boxes />

      {/* About Me content */}
      <div className="relative z-20 text-center px-6">
        <h1 className={cn("text-2xl md:text-4xl font-extrabold text-white")}>
          About Me
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          I'm a passionate developer who loves crafting beautiful, user-friendly, and highly functional web applications. With a keen eye for design and a deep appreciation for clean code, I bring ideas to life with tools like <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">Framer Motion</span>.
        </p>
        <p className="mt-4 text-sm text-neutral-400">
          When I’m not coding, you’ll find me exploring new technologies, enjoying nature, or diving into a good book.
        </p>
      </div>
    </div>
  );
}
