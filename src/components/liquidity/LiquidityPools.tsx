import React from "react";

export function LiquidityPools() {
  return (
    <div className="flex justify-between items-center bg-supernova w-full px-4 sm:px-10 lg:px-24 py-4 md:py-7 drop-shadow-xl shaodw-black z-50">
      <div className="text-sm lg:text-xl text-black/900 font-bold">
        Liquidity Pools
      </div>
      <button className="font-Montserrat text-xs md:text-base hover:shadow-none bg-black/900 shadow-2xl shadow-black/40 text-white px-5 md:px-10 py-3 font-medium rounded-lg">
        Create Pools
      </button>
    </div>
  );
}
