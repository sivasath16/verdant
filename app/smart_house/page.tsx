// "use client";
// import React from "react";
// import { PinContainer } from "@/components/ui/3d-pin";

// export default function GridPinDemo() {
//   const pins = [
//     {
//       title: "AI-powered fridge sensors track expiration dates and suggest recipes to reduce food waste",
//       heading: "Sustainable Food Storage",
//       href: "https://your-project-link.com",
//     },
//     {
//       title: "Automated waste sorting system using AI to efficiently segregate recyclables, compost, and trash.",
//       heading: "Smart Waste Segregation System",
//       href: "https://your-project-link.com",
//     },
//     {
//       title: "AI-powered grocery assistant recommends eco-friendly, low-carbon products tailored to your needs",
//       heading: "Sustainable Grocery Selector",
//       href: "https://your-project-link.com",
//     },
//     {
//       title: "Real-time monitoring of energy consumption with actionable insights to cut waste and reduce bills.",
//       heading: "Energy Consumption Tracker",
//       href: "https://your-project-link.com",
//     },
//     {
//       title: "AI-driven insulation adjusts home temperature based on weather patterns, optimizing energy use.",
//       heading: "Smart Insulation",
//       href: "https://your-project-link.com",
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <div className="flex">
//         {pins.map((pin, index) => (
//           <div key={index} className="flex items-center justify-center">
//             <PinContainer title={pin.title} href={pin.href}>
//               <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
//                 <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
//                   {pin.heading}
//                 </h3>
//                 <img
//                   src="/stock-photo-bro-girl-meme-recycling-plastic-waste-recycled-plastic-plastic-waste-issues-social-cause-2263917781.jpg"
//                   alt={pin.heading}
//                   className="flex flex-1 w-full h-[150px] rounded-lg mt-4 object-cover"
//                 />
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
<div className="grid grid-cols-2 gap-4 justify-center m-10  p-4">
<Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
