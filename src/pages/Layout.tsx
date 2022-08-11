import { PropsWithChildren } from "react";
import { Navbar, Web3ConnectorConfig } from "@/components";
import { SupportButton } from "@/utils";
import { ConnectWallet } from "@/components/navbar/ConnectWallet";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Web3ConnectorConfig>
      <main className=" h-full flex flex-col items-center w-full">
        <div className="!z-50 h-max absolute top-0 left-0 right-0 !w-full">
          <Navbar {...{bgColor: "white"}} />
        </div>
        <div className=" flex justify-center lg:pb-14 sm:!pb-0 !z-0 2xl:container w-full xl:h-full h-max flex-grow ">
          {children}
        </div>
        <div className="fixed bottom-0 right-0 xl:mr-6 sm:hidden w-full sm:relative z-50 bg-supernova/80">
          <ConnectWallet />
        </div>
        <SupportButton />
      </main>
    </Web3ConnectorConfig>
  );
}
