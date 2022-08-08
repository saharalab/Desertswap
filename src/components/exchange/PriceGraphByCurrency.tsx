import Image from "next/image";
import { PlotGraph } from "@/utils";
import SafeHydration from "@/utils/SafeHydration";
import { ToolTipProvider } from "./Context";

export function PriceGraphByCurrency() {
  return (
    <ToolTipProvider>
      <div className="bg-black/900 sm:bg-transparent rounded-3xl container w-full h-max sm:pt-20 px-6 sm:pb-20 md:pt-0 lg:pb-10 2xl:px-5 xl:px-0 xl:pl-14 space-y-5 mt-10 !py-10 xl:!pb-0 xl:!pt-24">
        <div className="h-max w-full flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-2 w-full min-w-max scale-90 lg:scale-100 -translate-x-2">
            <CurrencyInfo />
            <PricingInfo />
          </div>
          <div className="hidden md:flex">
            <ViewChartBy />
          </div>
        </div>
        <div className="w-full justify-center flex flex-col h-full">
          <div className="block md:hidden w-full sm:px-5 mb-10">
            <ViewChartBy />
          </div>
          <SafeHydration>
            <PlotGraph />
          </SafeHydration>
        </div>
      </div>
    </ToolTipProvider>
  );
}

function CurrencyInfo() {
  return (
    <div className="flex space-x-2 items-center">
      <div className="min-w-min">
        <Image
          className="object-contain min-w-max bg-black rounded-full"
          src="/assets/icons/dswap_account.png"
          height={20}
          width={20}
          alt="Binance Logo"
        />
        <Image
          className="object-contain bg-black rounded-full min-w-max"
          src="/assets/icons/dswap_account.png"
          height={20}
          width={20}
          alt="Binance Logo"
        />
      </div>
      <div className="text-white md:text-black font-black text-base md:text-lg">
        SATO{" "}
        <span className="text-lightEarlyDawn/80 md:text-lightGray">
          <span className="font-sans font-normal">/ </span> BSD
        </span>
      </div>
    </div>
  );
}

function PricingInfo() {
  return (
    <div className="space-y-1 w-full text-left">
      <div className="font-black text-2xl sm:text-3xl text-white md:text-black/900 text-left">
        100.59 BUSD
      </div>
      <div className="text-white md:text-black text-xs md:text-base">
        <span className=" font-semibold font-sans mr-1 text-supernova md:text-black">
          +4.909864 BUSD (+4.21%)
        </span>
        Past 24 hours
      </div>
    </div>
  );
}

function ViewChartBy() {
  return (
    <div className="flex space-x-10 font-medium text-lightEarlyDawn md:text-lightGray mr-0 xl:mr-10  justify-between w-full ">
      <button className="bg-black/900 text-floralWhite border-solid border-2 border-lightGray rounded-full px-2">
        24H
      </button>
      <button className="hover:bg-black/900 hover:text-white px-4 rounded-full">
        1W
      </button>
      <button className="hover:bg-black/900 hover:text-white px-4 rounded-full">
        1M
      </button>
    </div>
  );
}
