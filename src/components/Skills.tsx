'use client';
import { InfiniteMovingTabs } from "./ui/infinite-moving-tabs";
function Skills() {
    return (
        <div id="#skills" className="h-[20rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Skills</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className=" max-w-6xl">
                <InfiniteMovingTabs
  items={[
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "TypeScript" },
    { skill: "Node.js" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "TypeScript" },
    { skill: "Node.js" },
    { skill: "Python" },
  ]}
  direction="right"
  speed="fast"
  pauseOnHover
/>

                </div>
            </div>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingTabs
  items={[
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "TypeScript" },
    { skill: "Node.js" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "TypeScript" },
    { skill: "Node.js" },
    { skill: "Python" },
  ]}
  direction="left"
  speed="fast"
  pauseOnHover
/>
                </div>
            </div>
        </div>
    )
}

export default Skills