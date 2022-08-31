import Image from "next/image";
import { PlotGraph } from "@/components/common";
import SafeHydration from "@/components/common/SafeHydration";
import { ToolTipProvider } from "./Context";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function PriceGraphByCurrency() {
  const [viewChartBy, setViewChartBy] = useState<
    "monthly" | "weekly" | "hourly"
  >("hourly");
  const [coinPrice, setCoinPrice] = useState<number>(50.21);
  const [graphColor, setGraphColor] = useState<string>("");

  return (
    <ToolTipProvider>
      <div className="bg-black/900 sm:bg-transparent rounded-3xl container w-full h-max sm:pt-20 px-6 sm:pb-20 md:pt-0 lg:pb-10 2xl:px-5 xl:px-0 xl:pl-14 space-y-5 mt-10 !py-10 xl:!pb-0 xl:!pt-24">
        <div className="h-max w-full flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-2 w-full min-w-max scale-90 lg:scale-100 -translate-x-2">
            <CurrencyInfo />
            <PricingInfo
              {...{ viewChartBy, coinPrice, graphColor, setGraphColor }}
            />
          </div>
          <div className="hidden md:flex">
            <ViewChartBy {...{ viewChartBy, setViewChartBy }} />
          </div>
        </div>
        <div className="w-full justify-center flex flex-col h-full">
          <div className="block md:hidden w-full sm:px-5 mb-10">
            <ViewChartBy {...{ viewChartBy, setViewChartBy }} />
          </div>
          <SafeHydration>
            <PlotGraph
              {...{
                viewChartBy,
                setViewChartBy,
                coinPrice,
                setCoinPrice,
                graphColor,
              }}
            />
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


function PricingInfo({
  viewChartBy,
  coinPrice,
  graphColor,
  setGraphColor,
}: {
  viewChartBy: "monthly" | "weekly" | "hourly";
  coinPrice: number;
  graphColor: string;
  setGraphColor: Dispatch<SetStateAction<string>>;
}) {
  const [previousCoinPrice, setPreviousCoinPrice] = useState<number>(0);
  const [differenceInCoinPrice, setDifferenceInCoinPrice] =
    useState<any>(coinPrice);

  useEffect(() => {
    if (coinPrice !== previousCoinPrice) {
      setDifferenceInCoinPrice(
        parseFloat(String(coinPrice - previousCoinPrice)).toFixed(4)
      );
      setPreviousCoinPrice(coinPrice);
    }
    if (differenceInCoinPrice <= 0) {
      setGraphColor("#004415");
    } else {
      setGraphColor("#ED6071");
    }
  }, [coinPrice]);

  return (
    <div className="space-y-1 w-full text-left">
      <div className="font-black text-2xl sm:text-3xl text-white md:text-black/900 text-left">
        {coinPrice} BUSD
      </div>
      <div className="text-white md:text-black text-xs md:text-base">
        <span
          className={`font-semibold font-sans mr-1 ${
            graphColor === "#ED6071" ? "text-[#ED6071]" : "text-[#004415]"
          }`}
        >
          {differenceInCoinPrice >= 0
            ? "+" + String(differenceInCoinPrice)
            : differenceInCoinPrice}{" "}
          BUSD (+0.63%)
        </span>
        {viewChartBy === "hourly" ? "Past 24 hours" : ""}
        {viewChartBy === "weekly" ? "Past 1 Week" : ""}
        {viewChartBy === "monthly" ? "Past 1 Month" : ""}
      </div>
    </div>
  );
}

function ViewChartBy({
  viewChartBy,
  setViewChartBy,
}: {
  viewChartBy: "monthly" | "weekly" | "hourly";
  setViewChartBy: Dispatch<SetStateAction<"monthly" | "weekly" | "hourly">>;
}) {
  return (
    <div className="xl:mr-6 flex space-x-10 font-medium text-lightEarlyDawn md:text-lightGray mr-0  justify-between w-full ">
      <button
        onClick={() => setViewChartBy("hourly")}
        className={`${
          viewChartBy === "hourly"
            ? "bg-black/900 text-floralWhite border-solid border-2 border-lightGray rounded-full px-2"
            : "hover:bg-black/900 hover:text-white px-4 rounded-full"
        }`}
      >
        24H
      </button>
      <button
        onClick={() => setViewChartBy("weekly")}
        className={`${
          viewChartBy === "weekly"
            ? "bg-black/900 text-floralWhite border-solid border-2 border-lightGray rounded-full px-2"
            : "hover:bg-black/900 hover:text-white px-4 rounded-full"
        }`}
      >
        1W
      </button>
      <button
        onClick={() => setViewChartBy("monthly")}
        className={`${
          viewChartBy === "monthly"
            ? "bg-black/900 text-floralWhite border-solid border-2 border-lightGray rounded-full px-2"
            : "hover:bg-black/900 hover:text-white px-4 rounded-full"
        }`}
      >
        1M
      </button>
    </div>
  );
}
