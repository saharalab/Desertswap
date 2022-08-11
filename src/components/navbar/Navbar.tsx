import { useScrollTopByTag, useWindowSize } from "@/custom-hooks";
import { Logo } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ConnectWallet } from "./ConnectWallet";
import { Navigations } from "./Navigations";
import { ResponsiveMenu } from "./ResponsiveMenu";

export const Navbar = ({
  bgColor,
}: {
  bgColor: "yellow" | "white" | "none";
}) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const router = useRouter();
  const { width: screenWidth }: { width: number } = useWindowSize();
  let smBgColor: string = "";
  smBgColor =
    screenWidth <= 600 && router.asPath === "/exchange" ? "yellow" : "none";
  
  // Check Scroll Top Position
  let scrollTop: number = useScrollTopByTag("main");
  if (scrollTop === 0) {
    bgColor = "none";
  }

  return (
    <div
      className={`${
        bgColor === "white"
          ? "bg-lightEarlyDawn"
          : bgColor === "yellow"
          ? "bg-supernova"
          : ""
      } 
      ${smBgColor === "yellow" ? "bg-supernova" : smBgColor} 
      flex justify-center h-max min-w-full xl:pl-4`}
    >
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
