import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  const compareItems = [
    {
      title: "Sustainable Food Storage",
      description: "AI-powered fridge sensors track expiration dates and suggest recipes to reduce food waste",
      firstImage: "/1a.png",
      secondImage: "/1b.png",
    },
    {
      title: " Smart Waste Segregation System ",
      description: "Automated waste sorting system using AI to efficiently segregate recyclables, compost, and trash.",
      firstImage: "/2a.png",
      secondImage: "/2b.png",
    },
    {
      title: "Energy Consumption Tracker",
      description: "Real-time monitoring of energy consumption with actionable insights to cut waste and reduce bills.",
      firstImage: "/4a.png",
      secondImage: "/4b.png",
    },
    {
      title: "Sustainable Grocery Selector",
      description: "AI-powered grocery assistant recommends eco-friendly, low-carbon products tailored to your needs.",
      firstImage: "/3a.png",
      secondImage: "/3b.png",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-center">
          🌱 Sustainable Living
        </h1>
      </div>
      <div className="grid grid-cols-2 mx-32 gap-y-10 place-items-center h-screen">
        {compareItems.map((item, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold ">{item.title}</h3>
            <p className="text-sm text-gray-500 m-2 w-[500px]">{item.description}</p>
            <Compare
              firstImage={item.firstImage}
              secondImage={item.secondImage}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
