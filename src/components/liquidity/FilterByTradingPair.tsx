import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export function FilterByTradingPair() {
  return (
    <div className="text-black/900  pt-8 w-full text-sm">
      <div className="hidden lg:flex items-center space-x-2 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="-order-1 lg:order-none">Filter by Trading Pairs</div>
          <div className=" flex items-center space-x-2 ">
            <div className="hover:bg-gradient-to-tr from-black via-gray-900 to-black hover:text-supernova flex items-center space-x-1 border border-black/900 max-w-max px-4 py-2 rounded-lg cursor-pointer select-none">
              <span className="">All Tokens</span>
              <AiFillCaretDown className="text-xs" />
            </div>
            <span className="">+</span>
            <div className="hover:bg-gradient-to-tr from-black via-gray-900 to-black hover:text-supernova flex items-center space-x-1 border border-black/900 max-w-max px-4 py-2 rounded-lg cursor-pointer select-none">
              <span className="">All Tokens</span>
              <AiFillCaretDown className="text-xs" />
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex border-black/900 border  items-center px-4 py-1 rounded-lg ">
            <input
              className="py-2 bg-transparent text-black/900 outline-none placeholder:text-black/900/60 mr-2"
              type="text"
              placeholder="Search"
            />
            <BsSearch className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2 -order-1 lg:order-none">
            <input
              type="checkbox"
              className="checkbox border-black checked:border-none"
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
    <div className="text-xs w-full flex justify-between flex-wrap space-y-2">
      <div className="flex justify-between w-full flex-wrap">
        <div className="min-w-max">Filter by Trading Pairs</div>
        <div className="flex items-center space-x- 2">
          <input
            type="checkbox"
            className="mr-1 h-5 w-5 checkbox bg-black/20 border-black checked:border-none"
          />
          <span className="min-w-max">Hide low TVL pools</span>
        </div>
      </div>
      <div className=" flex items-center w-full space-x-2 ">
        <div className="flex justify-center border border-black/900  py-2 rounded-lg cursor-pointer select-none flex-grow w-full">
          <div className="flex items-center space-x-1 max-w-max">
            <span className="">All Tokens</span>
            <AiFillCaretDown className="text-xs" />
          </div>
        </div>
        <span className="text-sm">+</span>
        <div className="flex justify-center border border-black/900  py-2 rounded-lg cursor-pointer select-none flex-grow w-full">
          <div className="flex items-center space-x-1 max-w-max">
            <span className="">All Tokens</span>
            <AiFillCaretDown className="text-xs" />
          </div>
        </div>
      </div>
      <div className="flex border-black/900 border  items-center px-4 py-2 rounded-lg w-full">
        <input
          className="w-full bg-transparent text-black/900 outline-none placeholder:text-black/900/60"
          type="text"
          placeholder="Search"
        />
        <BsSearch />
      </div>
    </div>
  );
}
