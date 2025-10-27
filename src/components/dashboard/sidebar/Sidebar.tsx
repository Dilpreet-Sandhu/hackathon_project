"use client"
import {
  ChevronDown,
  CloudSun,
  Focus,
  ListChecks,
  Moon,
  NotebookPen,
  Sun,
  Umbrella,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import UserAvatar from "./UserAvatar";
import LogoutButton from "@/components/Button/LogoutButton";
import { useRouter, useSearchParams } from "next/navigation";

const Sidebar = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick() {

    const params = new URLSearchParams(searchParams.toString());



    router.push(`/dashboard/habit?${params.toString()}`);
  }

  return (
    <div className={`w-[320px] h-screen p-8 pr-6 pl-2`}>
      <div className="w-full h-full flex flex-col bg-zinc-900 rounded-lg">
        <div className="w-full p-3 h-[75px]">
          <UserAvatar/>
        </div>

        <div className="w-full p-3 h-fit ">
          <p className="text-[8px] mb-1 flex items-center gap-1 text-gray-300">
            <ChevronDown className="w-3 h-3" /> TIME OF THE DAY
          </p>
          <SidebarItem onClick={handleClick} icon={CloudSun}>Morning</SidebarItem>
          <SidebarItem icon={Sun}>Afternoon</SidebarItem>
          <SidebarItem icon={Moon}>Morning</SidebarItem>
        </div>

        <div className="w-full p-3 h-fit">
          <p className="text-[8px] mb-1 flex items-center gap-1 text-gray-300">
            <ChevronDown className="w-3 h-3" /> PREFERENCES
          </p>
          <SidebarItem icon={Focus}>Focus Mode </SidebarItem>
          <SidebarItem icon={Umbrella}>Off Mode </SidebarItem>
        </div>

        <div className="flex-1 flex p-3 flex-col">
          <p className="text-[8px] mb-1 flex items-center gap-1 text-gray-300">
            <ChevronDown className="w-3 h-3" /> OTHERS
          </p>
          <SidebarItem icon={NotebookPen}>Journal</SidebarItem>
          <SidebarItem icon={ListChecks}>Todo list</SidebarItem>

          <div className="w-full h-20 p-3 mt-10">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
