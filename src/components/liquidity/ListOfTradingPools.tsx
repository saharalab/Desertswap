import React from "react";
import { FilterByTradingPair } from "./FilterByTradingPair";
import { SmPairsCards } from "./SmPairsCards";
import { TradingPairsTable } from "./TradingPairsTable";

export function ListOfTradingPools() {
  return (
    <div className="bg-supernova px-4 sm:px-10 lg:px-24 h-max w-full z-0">
      <FilterByTradingPair />
      <div className="w-full h-max hidden lg:block">
        <TradingPairsTable />
      </div>
      <div className="w-full h-max lg:hidden">
        <SmPairsCards />
      </div>
    </div>
  );
}
