import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export function FilterByTradingPair() {
  return (
    <div className="text-black/900 px-24 pt-8 w-full h-full">
      <div className="hidden lg:flex items-center space-x-2 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="-order-1 lg:order-none">Filter by Trading Pairs</div>
          <div className=" flex items-center space-x-2 ">
            <div className="flex items-center space-x-1 border border-black/900 max-w-max px-4 py-1 rounded-full">
              <span className="">All Tokens</span>
              <AiFillCaretDown className="text-xs" />
            </div>
            <span className="">+</span>
            <div className="flex items-center space-x-1 border border-black/900 max-w-max px-4 py-1 rounded-full">
              <span className="">All Tokens</span>
              <AiFillCaretDown className="text-xs" />
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex border-black/900 border  items-center px-4 py-1 rounded-full ">
            <input
              className="bg-transparent text-black/900 outline-none placeholder:text-black/900/60"
              type="text"
              placeholder="Search"
            />
            <BsSearch />
          </div>
          <div className="flex items-center space-x-2 -order-1 lg:order-none">
            <input
              type="checkbox"
              className="checkbox bg-black/20 border-black checked:border-none"
            />
            <span className="">Hide low TVL pools</span>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full">
        <SmFilterByTradingPair />
      </div>
    </div>
  );
}

function SmFilterByTradingPair() {
  return (
    <div className="w-full">
      <div className="-order-1 lg:order-none">Filter by Trading Pairs</div>
      <div className=" flex items-center space-x-2 ">
        <div className="flex items-center space-x-1 border border-black/900 max-w-max px-4 py-1 rounded-full">
          <span className="">All Tokens</span>
          <AiFillCaretDown className="text-xs" />
        </div>
        <span className="">+</span>
        <div className="flex items-center space-x-1 border border-black/900 max-w-max px-4 py-1 rounded-full">
          <span className="">All Tokens</span>
          <AiFillCaretDown className="text-xs" />
        </div>
      </div>
      <div className="flex border-black/900 border  items-center px-4 py-1 rounded-full ">
        <input
          className="bg-transparent text-black/900 outline-none placeholder:text-black/900/60"
          type="text"
          placeholder="Search"
        />
        <BsSearch />
      </div>
      <div className="flex items-center space-x-2 -order-1 lg:order-none">
        <input
          type="checkbox"
          className="checkbox bg-black/20 border-black checked:border-none"
        />
        <span className="">Hide low TVL pools</span>
      </div>
    </div>
  );
}
