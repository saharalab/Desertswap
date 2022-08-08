import { Logo } from "@/utils";
import { useState } from "react";
import { ConnectWallet } from "./ConnectWallet";
import { Navigations } from "./Navigations";
import { ResponsiveMenu } from "./ResponsiveMenu";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="flex justify-center h-max min-w-full xl:ml-4">
      <div className=" md:px-3 2xl:container w-full flex justify-between items-center ">
        <div className="flex justify-between xl:justify-start w-full min-w-max space-x-5">
          <div className="px-3">
            <Logo />
          </div>
          <div className="hidden xl:flex">
            {/* Navigations */}
            <Navigations />
          </div>
          {/* Responsive Menu */}
          <div className="xl:hidden h-full w-full flex justify-end items-center">
            <ResponsiveMenu {...{ isOpen, setIsOpen }} />
          </div>
        </div>
        {/* Wallet Connect */}
        <div className="hidden sm:flex h-full">
          <ConnectWallet />
        </div>
        {/* <div className="hidden sm:hidden h-full w-full justify-end items-center">
          <ResponsiveMenu {...{ isOpen, setIsOpen }} />
        </div> */}
      </div>
    </div>
  );
};
