import { PropsWithChildren } from "react";
import { Navbar, NavConnectWallet } from "../components";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className=" h-full flex flex-col items-center w-full bg-supernova">
        <div className="!z-50 h-max absolute top-0 left-0 right-0 !w-full">
          <Navbar />
        </div>
        <div className="pb-14 xl:pb-0 !z-0 2xl:container w-full xl:h-full h-max flex-grow bg-supernova">
          {children}
        </div>
        <div className="xl:hidden w-full ">
          <NavConnectWallet />
        </div>
      </main>
    </>
  );
}
