import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconLeaf,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconPlaneDeparture,
  IconMoneybag
} from "@tabler/icons-react";
import { UserButton } from "@clerk/nextjs";

export function BottomDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconLeaf className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/home",
    },
    {
      title: "Travel",
      icon: (
        <IconPlaneDeparture className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/travel",
    },
    {
      title: "Smart Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/smart_house",
    },
    {
      title: "Redeem",
      icon: (
        <IconMoneybag className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/rewards",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center pb-6 w-full z-10">
      <FloatingDock items={links} />
    </div>
  );
}