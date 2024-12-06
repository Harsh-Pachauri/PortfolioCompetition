"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3D-card";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";
export function Projects() {
    return (
        <div className="relative flex flex-wrap justify-center items-center bg-[#030119]">
            <h2 className="mt-5 mb-2 text-6xl font-bold md:text-6xl text-black dark:text-white max-w-4xl">
          My Projects
        </h2>
                
            <div className="relative flex flex-wrap justify-center items-center bg-[#030119]">

                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="absolute inset-0 z-0" // Positioned behind the cards
                    particleColor="#FFFFFF"
                />
                <div className="relative z-10  m-4">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Forest
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ={60}
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A blogging platform
                            </CardItem>
                            <CardItem translateZ={100} className="w-full mt-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={1000}
                                    width={1000}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="relative z-10  m-4">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Tutor Tuition
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ={60}
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A platform ton connect students with the best teachers
                            </CardItem>
                            <CardItem translateZ={100} className="w-full mt-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={1000}
                                    width={1000}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="relative z-10  m-4">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Musified
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ={60}
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A Music Player to Musify your life
                            </CardItem>
                            <CardItem translateZ={100} className="w-full mt-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={1000}
                                    width={1000}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className="relative z-10  m-4">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                My Weather
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ={60}
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Know the weather like never before
                            </CardItem>
                            <CardItem translateZ={100} className="w-full mt-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height={1000}
                                    width={1000}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://twitter.com/mannupaaji"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </div>

    );
}
