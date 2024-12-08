import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { Meteors } from "./ui/meteors";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWords } from "./ui/flip-words";
import { SparklesCore } from "./ui/sparkles";
import CircularImage from "./ui/circular-image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
 const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

function HeroSection() {
  const words2 = ["Web Developer", "AI-ML Enthusiast", "Data Scientist"];
  const words = [
    {
      text: "I'm",
    },
    {
      text: "HARSH",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "PACHAURI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="bg-[#050619] h-auto md:h-[45rem] w-full rounded-md flex flex-col md:flex-row items-center justify-around relative overflow-hidden mx-auto py-10 px-6 md:px-16">
      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      {/* Left Section: Text */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start">
        <h1 className="m-1 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
          <TypewriterEffectSmooth words={words} />
        </h1>
        <div className="text-7xl font-semibold text-neutral-600 dark:text-neutral-400">
          <FlipWords words={words2} /> <br />
        </div>
        <div className="mt-6 space-x-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-gray-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
              Explore Courses
            </Button>
          </Link>
          <Link href="/coffee">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-gray-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
              Buy Me Coffee
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Section: CircularImage */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0">
        <div className="w-full max-w-[500px] aspect-square">
          <CircularImage 
            imageSrc="/pfp3.jpg"
            imageAlt="Harsh Pachauri"
            size="xlg"
            />
        </div>
        <div className="relative w-full mt-4">
          {/* Sparkles */}
          <div className="relative w-full h-20 mx-auto">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
              />
          </div>

          {/* Sparkles Gradient Background */}
          <div className="absolute inset-0 w-full h-full bg-[#050619] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

          {/* Underline Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        </div>
      </div>

      {/* Meteors */}
      <Meteors number={40} />
    </div>
  );
}

export default HeroSection;

