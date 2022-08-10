import React, { useRef } from "react";
import {
  BsArrowLeft,
  BsArrowRight,
  BsCircleHalf,
  BsCurrencyBitcoin,
} from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { ImArrowUpRight2 } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { RiExternalLinkFill } from "react-icons/ri";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MiningIcon } from "@/utils";

export function TradingPairsTable() {
  return (
    <div className=" text-black/900 text-sm py-8 [&_th]:font-normal [&_thead_tr_th:first-child]:rounded-l-lg [&_thead_tr_th:last-child]:rounded-r-lg">
      <table className="min-w-max w-full text-left table-fixed">
        <thead className="">
          <tr className="rounded-lg  bg-black/900 text-white">
            <th className="">
              <div className="p-[20px] text-inherit min-w-max">
                Trading Pair
              </div>
            </th>
            <th>
              <div className="p-[20px] text-inherit min-w-max">
                Liquidity Pools
              </div>
            </th>
            <th>
              <div className="p-[20px] text-inherit min-w-ma">
                Total Value Locked (TVL)
              </div>
            </th>
            <th>
              <div className="p-[20px] text-inherit min-w-max">
                My Liquidity
              </div>
            </th>
            <th>
              <div className="p-[20px] text-inherit min-w-max">
                APY (7-Day Average)
              </div>
            </th>
            <th className="w-[140px]"></th>
          </tr>
        </thead>
        <tbody className="cursor-pointer">
          {[...Array(10)].map((item: any, idx: number) => (
            <TableRow key={idx} />
          ))}
        </tbody>
      </table>
      <div className="space-x-3 my-10 flex justify-center">
        <button className="text-black/900/60">
          <BsArrowLeft className="text-2xl" />
        </button>
        <div className="">{`Page 1 of 23`}</div>
        <button className="">
          <BsArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

function TableRow({ rowWidth }: { rowWidth: number }) {
  const pagination: any = useRef(null);
  return (
    <Disclosure>
      {({ open }: { open: Boolean }) => (
        <>
          <Disclosure.Button
            as="tr"
            className={`${
              !open
                ? "border-b border-black/900/20"
                : "border-b border-dashed border-black/900/20 bg-white/20"
            }`}
          >
            <TableRowButton {...{ open }} />
          </Disclosure.Button>
          <Disclosure.Panel
            as="tr"
            ref={pagination}
            className={`${open ? "border-b border-black/900/20 " : ""}`}
          >
            <TableRowPannel {...{ rowWidth: pagination?.current?.offsetWidth || 0 }} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function TableRowButton({ open }: { open: Boolean }) {
  return (
    <>
      <td className="py-5 px-6">
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
        <div className="ml-3 scale-105">
          <MiningIcon />
        </div>
      </td>
      <td>
        <div className="py-3 px-6">
          <div className="flex items-center space-x-1 cursor-pointer">
            <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
              <span className="">0xc9f9...61ad</span>
              <RiExternalLinkFill className="text-lg" />
            </div>
            <IoCopyOutline className="text-base" />
          </div>
          <div className="my-1 flex items-center space-x-1">
            <BsCircleHalf />
            <div className="">Single</div>
          </div>
        </div>
      </td>
      <td>
        <div className="py-3 px-6">
          <div className="font-light font-Montserrat">
            <span className="text-black/900 font-normal font-StyreneAWeb">
              3.51M
            </span>
            <span className="ml-1">
              USDT
              <span className="ml-3">25.59%</span>
            </span>
          </div>
          <div className="font-light font-Montserrat mt-1">
            <span className="text-black/900 font-normal font-StyreneAWeb">
              10.21M
            </span>
            <span className="ml-1">
              USDC
              <span className="ml-3">74.41%</span>
            </span>
          </div>
        </div>
      </td>
      <td>
        <div className="py-3 px-6 text-xl">-</div>
      </td>
      <td>
        <div className="py-3 px-6">
          <div className="font-light font-Montserrat">
            <span className="text-black/900 font-bold font-StyreneAWeb">
              8.51%
            </span>
            <span className="ml-3">USDT</span>
          </div>
          <div className="font-light font-Montserrat mt-1">
            <span className="text-black/900 font-bold font-StyreneAWeb">
              6.21%
            </span>
            <span className="ml-3">USDC</span>
          </div>
        </div>
      </td>
      <td>
        <div className="py-3 px-6 flex space-x-2 scale-125 text-4xl">
          <IoMdAdd className="h-max w-max font-bold  p-1 rounded-full border border-black" />
          <ImArrowUpRight2 className="h-max w-max font-bold p-1 rounded-full border border-black" />
          {!open ? (
            <AiFillCaretDown className="h-max w-max font-bold p-2 text-black/900/80" />
          ) : (
            <AiFillCaretUp className="h-max w-max font-bold p-2 text-black/900/80" />
          )}
        </div>
      </td>
    </>
  );
}

function TableRowPannel({ rowWidth }: { rowWidth: number }) {
  return (
    <td>
      <div
      style={{ width: rowWidth }}
        className={`py-6 px-6 flex items-center justify-between min-w-max bg-white/20`}
      >
        <div className="flex">
          <div className="space-y-2 mr-14">
            <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
              <span className="">USDT LP Mining</span>
              <RiExternalLinkFill className="text-lg" />
            </div>
            <div className="flex space-x-1 border-b border-transparent hover:border-black/900">
              <span className="">USDC LP Mining</span>
              <RiExternalLinkFill className="text-lg" />
            </div>
          </div>
          <div className="mr-14">
            <div className="text-sm font-sans font-light">
              Trading Fee Percentage
            </div>
            <div className="mt-1">0.002%</div>
          </div>

          <div className="">
            <div className="text-sm font-sans font-light">
              Slippage Coefficient
            </div>
            <div className="mt-1">0.0001</div>
          </div>
        </div>
        <div className="">
          <button className=" px-28 rounded-lg py-4 font-semibold bg-gradient-to-tr from-black via-gray-900 to-black text-white">
            Add Liquidity
          </button>
        </div>
      </div>
    </td>
  );
}

