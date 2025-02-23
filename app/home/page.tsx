"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import SheetDemo from "../components/SideSheets";
import Lottie from "lottie-react";
import JoinCommunity from "@/public/lottie-files/Join challenge.json"
import Walking from "@/public/lottie-files/Walking.json"
import Inital_load from "@/public/lottie-files/Inital_load.json"
import Invite from "@/public/lottie-files/Invite.json"
import Viral from "@/public/lottie-files/Viral.json"
import Graph from "@/public/lottie-files/Grpah.json"


export default function BentoGridDemo() {
  const { user } = useUser();
  const firstName = user?.firstName || "there";
  
  return (
    <>
    <div className="mb-12 max-w-4xl mx-auto pt-12">
      <h1 className="text-4xl font-bold mb-4 mx-auto">👋 Hello, {firstName}!</h1>
    </div>
    <div className="flex flex-col justify-center relative">
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
    17.34 kg CO2
  </div>
  <Lottie animationData={Inital_load} className="w-[450px] mx-auto" loop />
</div>
    <SheetDemo />
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "🌍 Trending Now",
    description: "Discover the latest eco-friendly trends and insights. Stay ahead in your sustainability journey!",
    header: <Lottie animationData={Viral} className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" loop />,
  },
  {
    title: "🚶 Step Count & Carbon Impact",
    description: "Walk more, emit less! Track your steps and see how they contribute to a greener planet.",
    header: <Lottie animationData={Walking} className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" loop />,
  },
  {
    title: "🏆 Join Challenges",
    description: "Compete, learn, and reduce! Take on exciting sustainability challenges and make a real impact",
    header:  <Lottie animationData={JoinCommunity} className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" loop />,
  },
  {
    title: "📊 Carbon Emission Tracker",
    description:
      "Visualize your carbon footprint in real-time. Set goals and reduce your emissions effortlessly!",
      header:  <Lottie animationData={Graph} className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" loop />,

  },
  {
    title: "📢 Invite & Inspire",
    description: "Sustainability is better together! Invite friends and grow a community that cares for the planet.",
    header: <Lottie animationData={Invite} className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" loop />,
  },
];

