"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import SheetDemo from "../components/SideSheets";
import Lottie from "lottie-react";
import JoinCommunity from "@/public/lottie-files/Join the community.json"
import Inital_load from "@/public/lottie-files/Inital_load.json"


export default function BentoGridDemo() {
  const { user } = useUser();
  const firstName = user?.firstName || "there";
  
  return (
    <>
    <div className="mb-12 max-w-4xl mx-auto pt-12">
      <h1 className="text-4xl font-bold mb-4 mx-auto">👋 Hello, {firstName}!</h1>
    </div>
    <Lottie animationData={Inital_load} className="w-[450px] mx-auto" loop />
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
    header: <Skeleton />,
  },
  {
    title: "🚶 Step Count & Carbon Impact",
    description: "Walk more, emit less! Track your steps and see how they contribute to a greener planet.",
    header: <Skeleton />,
  },
  {
    title: "🏆 Join Challenges",
    description: "Compete, learn, and reduce! Take on exciting sustainability challenges and make a real impact",
    header:  <Lottie animationData={JoinCommunity} className="w-[200px] mx-auto bg-black" loop />
    ,
  },
  {
    title: "📊 Carbon Emission Tracker",
    description:
      "Visualize your carbon footprint in real-time. Set goals and reduce your emissions effortlessly!",
    header: <Skeleton />,
  },
  {
    title: "📢 Invite & Inspire",
    description: "Sustainability is better together! Invite friends and grow a community that cares for the planet.",
    header: <Skeleton />,
  },
];


  
  