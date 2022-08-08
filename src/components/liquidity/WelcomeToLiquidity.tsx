import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export function WelcomeToLiquidity() {
  return (
    <div className="pt-16 px-4 lg:px-24">
      <div className=" bg-liquidity-banner bg-right bg-auto bg-[400px] bg-no-repeat bg-[90%] h-[400px] w-full">
        <div className="font-Montserrat text-3xl font-bold text-black/900 flex flex-col justify-center items-start w-full h-full">
          <div className="">Welcome to DSWAP</div>
          <div className="">Provide Liquidity for Trading Pairs</div>
          <a href="" className="my-10 flex items-center space-x-1">
            <span className="text-sm font-normal">Tutorial</span>
            <BsArrowUpRight className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}
