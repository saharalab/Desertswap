import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export function WelcomeToLiquidity() {
  return (
    <div className="pt-16 lg:px-24">
      <div className="px-4 bg-contain bg-liquidity-banner bg-right bg-no-repeat py-6 w-full md:h-[400px]">
        <div className="text-base md:text-4xl font-black text-black/900 flex flex-col justify-center items-start w-full h-full">
          <div className="font-Montserrat">Welcome to DSWAP</div>
          <div className="font-Montserrat">Provide Liquidity for Trading Pairs</div>
          <a href="" className="my-10 flex items-center space-x-1">
            <span className="text-xs md:text-lg font-normal hover:underline decoration-black underline-offset-2">Tutorial</span>
            <BsArrowUpRight className="text-xs md:text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
