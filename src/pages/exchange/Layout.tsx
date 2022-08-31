import { PropsWithChildren } from "react";
import { Navbar, Web3ConnectorConfig } from "@/components";
import { SupportButton } from "@/components/common";
import { ConnectWallet } from "@/components/navbar/ConnectWallet";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Web3ConnectorConfig>
      <main className="bg-supernova lg:main-bg-gradient h-full flex flex-col items-center w-full">
        <div className="!z-50 h-max absolute top-0 left-0 right-0 !w-full">
          <Navbar {...{ bgColor: "none" }} />
        </div>
        <div className=" pb-14 sm:!pb-0 !z-0 2xl:container w-full xl:h-full h-max flex-grow ">
          {children}
        </div>
        <div className="sm:hidden w-full relative z-50">
          <ConnectWallet />
        </div>
        <SupportButton />
      </main>
    </Web3ConnectorConfig>
  );
}
