
import { Button } from "@/components/Button/Button";
import DashboardButton from "@/components/landing-page/DashboardButton";
import HowItWorks from "@/components/landing-page/HowItWorks";
import TopBar from "@/components/landing-page/TopBar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import routes from "@/config/routes";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex min-h-screen  bg-black flex-col">

      <div className="w-full px-20">
       <TopBar/>
      </div>
      <div className=" relative w-full flex flex-col h-[630px]">
        <BackgroundRippleEffect/>

        <div className="flex w-full h-[470px] flex-col gap-6 justify-center items-center">

            <div className="flex justify-center items-center flex-col">
              <h1 className={`text-[60px] text-[#0f65bb] font-extrabold`}>Your Habits , Tracked</h1>
              <h3 className="text-[34px] text-white/30 font-bold">Your goals , Achieved</h3>
            </div>

 
            <DashboardButton/>
         
        </div>

      </div>

      <HowItWorks/>
 
    </div>
  );
}
