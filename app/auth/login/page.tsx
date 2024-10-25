"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { AtSignIcon, QuoteIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 items-center w-full">
        <form action="" className="flex flex-col gap-4 max-w-md">
          <h1 className="text-4xl font-semibold">Welcome to Login</h1>
          <span className="text-gray-400 text-sm mb-4">
            Blandit libero volutpat sed cras ornare arcu dui.
            <br /> Cras egestas diam in arcu egestas.
          </span>
          <Input type="text" placeholder="Email" icon={AtSignIcon} />
          <Input isSecure type="password" placeholder="Password" />
          <Button>Login</Button>
        </form>
      </div>

      <div className="hidden lg:flex bg-blue-600 w-full h-full flex-col justify-center items-center">
        <div className="relative flex flex-col gap-4 max-w-md p-4">
          <div className="-top-12 left-2 bg-emerald-200 p-2 rotate-180 rounded-full absolute">
            <QuoteIcon className="text-sky-600 w-8 h-8" />
          </div>
          <h1 className="text-8xl font-semibold text-white">Make a dream.</h1>
          <p className="text-white font-normal pl-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className="h-full w-0.5 bg-white left-7 opacity-30 absolute" />
        </div>
      </div>
    </div>
  );
}
