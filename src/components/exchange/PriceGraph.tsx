import Image from "next/image";
import React from "react";
import { PlotGraph } from "../../utils";

export function PriceGraph() {
  return (
    <div className="container w-full h-max xl:py-14 pt-20 pb-10 2xl:px-5 xl:px-14 space-y-20">
      <div className="h-max w-full flex flex-col md:flex-row justify-between items-end">
        <div className="space-y-2 w-full min-w-max scale-90 lg:scale-100">
          <CurrencyInfo />
          <PricingInfo />
        </div>
        <div className="hidden md:flex">
          <ViewChartBy />
        </div>
      </div>
      <div className="w-full justify-center flex flex-col h-full">
        <div className="block md:hidden w-full px-5">
          <ViewChartBy />
        </div>
        <PlotGraph />
      </div>
    </div>
  );
}

function CurrencyInfo() {
  return (
    <div className="flex space-x-2 ">
      <div className="min-w-min">
        <Image
          className="object-contain min-w-max bg-black rounded-full"
          src="/assets/icons/binance-logo.png"
          height={30}
          width={30}
          alt="Binance Logo"
        />
        <Image
          className="object-contain bg-black rounded-full min-w-max"
          src="/assets/icons/binance-logo.png"
          height={30}
          width={30}
          alt="Binance Logo"
        />
      </div>
      <div className="text-black/900 font-black text-lg sm:text-xl">
        SATO{" "}
        <span className="text-black/500/70">
          <span className="font-sans font-normal">/ </span> BSD
        </span>
      </div>
    </div>
  );
}

function PricingInfo() {
  return (
    <div className="space-y-1 w-full text-left">
      <div className="font-black text-2xl sm:text-4xl text-lightGray text-left">
        100.59 BUSD
      </div>
      <div className="font-black/900 font-bold text-xs">
        <span className="text-green-600 font-normal font-sans">
          +4.909864 BUSD (+4.21%){" "}
        </span>{" "}
        Past 24 hours
      </div>
    </div>
  );
}

function ViewChartBy() {
  return (
    <div className="flex space-x-10 font-black text-lightGray mr-10 justify-between w-full ">
      <button className="border-solid border-2 border-black/900 rounded-full px-2">
        24H
      </button>
      <button>1W</button>
      <button>1M</button>
    </div>
  );
}
