import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex h-screen bg-black ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="w-full min-h-screen flex p-8 pl-0">
          <div className="flex-1 bg-zinc-900  rounded-lg">
            {children}
          </div>
        </div>
        
      </main>
    </div>
  );
}
