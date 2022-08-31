import {
  useAddEventListener,
  useScrollTopByTag,
  useWindowSize,
} from "@/custom-hooks";
import { Logo } from "@/components/common";
import { useRouter } from "next/router";
import { createRef, ElementRef, RefObject, useRef, useState } from "react";
import { ConnectWallet } from "./ConnectWallet";
import { Navigations } from "./Navigations";
import { MdResponsiveMenu } from "./MdResponsiveMenu";

export const Navbar = ({
  bgColor: backgroundColor,
}: {
  bgColor: "yellow" | "white" | "none";
}) => {
  const router = useRouter();

  // HamBurger Open Close for Small Screen Sizes
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  // Measure Screen Size
  const { width: screenWidth }: { width: number } = useWindowSize();

  // Background Color
  let [bgColor, setBgColor] = useState<string>(backgroundColor);
  let [smBgColor, setSmBgColor] = useState<string>("");

  // Background Color incase Small Size on /Exchange page ? else none
  if (screenWidth <= 600 && router.asPath === "/exchange") {
    bgColor !== bgColor ? setBgColor("yellow") : "";
    smBgColor !== "yellow" ? setSmBgColor("yellow") : "";
  } else smBgColor !== "none" ? setSmBgColor("none") : "";

  // Check Scroll Top Position
  let scrollTop: number | undefined = useScrollTopByTag("main");

  /**
   * Event Listener on Scroll /page
   * To: Change Background Color
   */
  function eventListenerOnScroll() {
    // if (scrollTop === 0) {
    //   smBgColor = "none";
    //   bgColor = "none";
    // }
    if (typeof window !== "undefined") {
      let navbar: any = window?.document.querySelector("#navbar");
      scrollTop = window?.document.querySelector("main")?.scrollTop;
      
      if (navbar !== null) {
        if (scrollTop !== 0) {
          navbar.style.backgroundColor = bgColor;
        }
        if (scrollTop === 0) {
          navbar.style.backgroundColor = "transparent";
        }
      }
    }
  }

  useAddEventListener({
    tag: "main",
    eventName: "scroll",
    eventListener: eventListenerOnScroll,
  });

  return (
    <div
      id="navbar"
      className={`${
        bgColor === "white" && scrollTop !== 0
          ? "bg-lightEarlyDawn"
          : bgColor === "yellow"
          ? "bg-supernova"
          : ""
      } 
      ${smBgColor === "yellow" && scrollTop !== 0 ? "bg-supernova" : smBgColor} 
      flex justify-center h-max min-w-full xl:pl-4`}
    >
      <div className=" md:px-3 2xl:container w-full flex justify-between items-center ">
        <div className="flex justify-between xl:justify-start xl/2:justify-between items-center w-full min-w-max 2xl:space-x-5 xl:w-[60%] xl/2:w-[65%] 2xl:w-[65%]">
          <div className="px-3">
            <Logo />
          </div>
          <div className="hidden xl:flex xl:-translate-x-4">
            {/* Navigations */}
            <Navigations />
          </div>
          {/* Responsive Menu */}
          <div className="xl:hidden h-full w-full flex justify-end items-center">
            <MdResponsiveMenu {...{ isOpen, setIsOpen }} />
          </div>
        </div>
        {/* Wallet Connect */}
        <div className="hidden sm:flex h-full relative container xl/2:w-[33%] xl:w-[40%] 2xl:w-[33%] max-w-min xl:max-w-full ml-7  xl:ml-0">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};
