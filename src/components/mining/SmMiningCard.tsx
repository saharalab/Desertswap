import { MiningIcon } from "@/utils";
import Image from "next/image";
import { BsCircleHalf, BsCurrencyBitcoin } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";
import { IoCopyOutline } from "react-icons/io5";
import { RiExternalLinkFill } from "react-icons/ri";

export function SmMiningCard() {
  return (
    <div className="h-max space-y-3 w-[26em] bg-white/40 px-10 py-6 rounded-2xl shadow-2xl mt-10">
      <div className="mb-10 flex justify-between">
        <div className="text-lg font-bold mt-2">USDT-USDC LP</div>
        {/* CRPYTO ICON */}
        <div className="flex relative -translate-y-12 translate-x-6">
          {/* ETH */}
          <div className="grid place-content-center relative z-10 bg-white shadow-2xl shadow-black max-w-max p-2 rounded-full">
            <FaEthereum className="text-4xl text-black" />
          </div>
          {/* ETH */}
          <div className="grid place-content-center relative -left-2 p-2 z-0 bg-blue-600 shadow-2xl shadow-black max-w-max rounded-full">
            <BsCurrencyBitcoin className="text-4xl text-white -rotate-3" />
          </div>
        </div>
      </div>
      <div className="space-x-3 border-b border-black pb-4 w-full flex justify-center leading-7">
        <div className="">
          <div className="text-[2rem] font-normal">7.55%</div>
          <div className="text-center text-[.6rem] font-medium mt-2">USDT APY</div>
        </div>
        <div className="text-[1.6rem] px-3 font-sans">/</div>
        <div className="">
          <div className="text-[2rem] font-normal">7.55%</div>
          <div className="text-center text-[.6rem] font-medium mt-2">USDT APY</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black/60">Reward Token</div>
        <div className="border border-black rounded-full flex items-center">
          <Image className="rounded-full" src="/assets/icons/Desertswap Icon Logo.png" height={20} width={20} alt="reward-token-logo" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black/60">Value Locked</div>
        <div className="">$13,681,138.12</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black/60">My Share</div>
        <div className="">$0(0%)</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black/60">Available Balance</div>
        <div className="">$0</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-black/60">My Reward</div>
        <div className="">Unknown</div>
      </div>
      <div className="flex w-full space-x-2">
        <button className="bg-black/900 text-supernova w-full py-4 rounded-lg">Stake ETH</button>
        <button className="bg-black/900 text-supernova w-full py-4 rounded-lg">Stake Bitcoin</button>
      </div>
    </div>
  );
}

export function SmMiningCards() {
  return (
    <div className="w-96 py-2 border border-black/900 shadow-lg rounded-2xl text-[1rem]">
      <div className="py-2 px-2 flex w-full justify-between">
        <div className="flex items-center">
          {/* CRPYTO ICON */}
          <div className="flex relative scale-75">
            {/* ETH */}
            <div className="grid place-content-center relative z-10 bg-white shadow-2xl max-w-max p-1 rounded-full">
              <FaEthereum className="text-lg text-black" />
            </div>
            {/* ETH */}
            <div className="grid place-content-center relative -left-2 p-1 z-0 bg-blue-600 max-w-max rounded-full">
              <BsCurrencyBitcoin className="text-xl text-white -rotate-3" />
            </div>
          </div>
          {/* CURRENCY NAME */}
          <div className=" font-sans font-black text-sm -translate-x-1">
            USDT / USDC
          </div>
        </div>
        <div className="my-1 flex items-center space-x-1 mr-2">
          <BsCircleHalf className="rotate-180" />
          <div className="text-[0.68rem]">Single</div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-white/30 to-transparent w-full py-2 flex border-t border-b border-black">
        <div className="ml-3 scale-105">
          <MiningIcon />
        </div>
        <div className="text-2xs flex items-center space-x-2 cursor-pointer">
          <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
            <span className="">USDT LP</span>
            <RiExternalLinkFill className="text-sm mt-1" />
          </div>
          <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
            <span className="">USDC LP</span>
            <RiExternalLinkFill className="text-sm mt-1" />
          </div>
        </div>
      </div>
      <div className="pt-3 pb-6 w-full flex justify-center leading-7">
        <div className="">
          <div className="text-[1.5rem] font-bold">7.55%</div>
          <div className="text-[.8rem] font-medium mt-2">USDT APY</div>
        </div>
        <div className="text-[1.6rem] px-3 font-sans">/</div>
        <div className="">
          <div className="text-[1.5rem] font-bold">7.55%</div>
          <div className="text-[.8rem] font-medium mt-2">USDT APY</div>
        </div>
      </div>
      <div className="border-t border-black/900/60 mx-6">
        <div className="my-5">
          <div className="space-y-2">
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
              <div className="text-black/900/80 min-w-max">Liquidity Pools</div>
              <div className="flex items-center space-x-2 w-[50%]">
                <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
                  <span className="">0xc9f9...61ad</span>
                  <RiExternalLinkFill className="text-lg" />
                </div>
                <IoCopyOutline className="text-base object-contain min-w-max" />
              </div>
            </div>
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
              <div className="text-black/900/80 min-w-max">
                Total Value Locked
                <div>(TVL)</div>
              </div>
              <div className="flex items-center space-x-2 flex-wrap justify-end">
                <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
                  <span className="">3.61M</span>
                  <span className="text-black/900/80">USDT</span>
                </div>
                <span className="text-black/900/80">26.36%</span>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
              <div className="text-black/900/80 min-w-max w-[32px] "></div>
              <div className="flex md:items-center space-x-2 !justify-end items-end flex-col md:flex-row">
                <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
                  <span className="">10.11M</span>
                  <span className="text-black/900/80">USDC</span>
                </div>
                <span className="text-black/900/80">73.64%</span>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
              <div className="text-black/900/80">
                Tradin Fee <div className="">Percentage</div>
              </div>
              <div className="flex items-center space-x-4 ">
                <span className="text-black/900">0.002%</span>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-1 cursor-pointer">
              <div className="text-black/900/80">Slippage Coefficient</div>
              <div className="flex items-center space-x-4 ">
                <span className="text-black/900">0.0001</span>
              </div>
            </div>
            <div className="flex justify-center items-center pt-4 space-x-4 max-h-max">
              <ImArrowUpRight2 className="object-contain h-[2.5rem] w-[3rem] font-bold p-1 rounded-full border border-black" />
              <button className=" max-w-[300px] w-full rounded-lg py-3 font-semibold bg-black/900 text-white">
                Add Liquidity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
