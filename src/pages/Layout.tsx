import { PropsWithChildren } from "react";
import { Navbar, NavConnectWallet } from "../components";
import { SupportButton } from "../utils";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="lg:main-bg-gradient h-full flex flex-col items-center w-full">
        <div className="!z-50 h-max absolute top-0 left-0 right-0 !w-full">
          <Navbar />
        </div>
        <div className=" pb-14 sm:!pb-0 !z-0 2xl:container w-full xl:h-full h-max flex-grow ">
          {children}
        </div>
        <div className="sm:hidden w-full relative z-50">
          <NavConnectWallet />
        </div>
        <SupportButton />
      </main>
    </>
  );
}
