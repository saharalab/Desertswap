import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";

export function UpfrontERC20Section() {
  return (
    <div className="pt-5 sm:pt-20 px-2 sm:px-10 md:px-24 w-full flex justify-center flex-wrap lg:flex-nowrap">
      <InfoPannel />
      <div id="enterToken" className="w-full ">
        <EnterTokenForm />
      </div>
    </div>
  );
}

function EnterTokenForm() {
  const [unfoldForm, setUnfoldForm] = useState<Boolean>(false);
  return (
    <div
      className={`${
        unfoldForm ? "mt-0" : "mt-10"
      }  shadow-2xl bg-black border rounded-2xl p-8 mb-16 md:mb-0`}
    >
      <div className=" text-white h-full w-full ">
        <Disclosure>
          {({ open }: { open: Boolean }) => (
            <>
              {/* Pick up the Opening Closing State of Expanding Field! */}
              {open === unfoldForm ? "" : setUnfoldForm(open)}
              <div className={` text-lightEarlyDawn/90 space-y-2 `}>
                <div className="flex">
                  <span className="w-full font-semibold">
                    Enter Token Parameters:
                  </span>
                  <Disclosure.Button className="text-white/80 flex items-center w-max justify-between px-4 py-2 text-left text-xs font-medium">
                    <span>More</span>
                    <BiCaretDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4`}
                    />
                  </Disclosure.Button>
                </div>
                <div className="h-auto flex justify-between items-center flex-wrap w-full lg:w-auto space-y-2 lg:space-y-0">
                  <div className="text-sm space-y-1 w-full lg:max-w-max">
                    <div className="text-xs text-white/60">1. Token Symbol</div>
                    <input
                      className="w-full min-w-max outline-none placeholder:text-white/40 text-white rounded-lg p-2 px-4 bg-white/10"
                      type="text"
                      placeholder="1-16 Characters"
                    />
                  </div>
                  <div className=" text-sm space-y-1 w-full lg:max-w-max">
                    <div className="text-xs text-white/60">2. Token Supply</div>
                    <input
                      className="w-full min-w-max outline-none placeholder:text-white/40 text-white rounded-lg p-2 px-4 bg-white/10"
                      type="text"
                      placeholder="0-999,999,999,999"
                    />
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="py-4">
                <div className="w-full flex justify-between flex-wrap lg:flex-nowrap">
                  <div className="text-sm space-y-1 w-full lg:max-w-max">
                    <div className="text-xs text-white/60">3. Token Name</div>
                    <input
                      className="w-full min-w-max outline-none placeholder:text-white/40 text-white rounded-lg p-2 px-4 bg-white/10"
                      type="text"
                      placeholder="1-64 Characters"
                    />
                  </div>
                  <div className="text-sm space-y-1 w-full lg:max-w-max">
                    <div className="text-xs text-white/60">4. Decimals</div>
                    <input
                      className="w-full min-w-max outline-none placeholder:text-white/40 text-white rounded-lg p-2 px-4 bg-white/10"
                      type="text"
                      defaultValue={18}
                    />
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <SpecialFeatures />
      </div>
    </div>
  );
}

function SpecialFeatures() {
  const [burnCheckBox, setBurnCheckBox] = useState<Boolean>(false);
  const [tradingFeeCheckBox, setTradingFeeCheckBox] = useState<Boolean>(false);
  const [supportSupplyInceaseCheckBox, setSupportSupplyInceaseCheckBox] = useState<Boolean>(false);
  const [burnPercentageValue, setBurnPercentageValue] = useState<
    number | undefined
  >(undefined);
  const [tradingFeePercentageValue, setTradingFeePercentageValue] = useState<
    number | undefined
  >(undefined);

  function handleBurnPercentageValue(event: any) {
    let isPercentageValueAccordinglyFilters: Boolean = false;
    let currentValue = Number(event.target.value);
    // Filter by max number
    if (currentValue <= 50) {
      isPercentageValueAccordinglyFilters = true;
    }

    if (isPercentageValueAccordinglyFilters) {
      console.log(event.target.value);
      setBurnPercentageValue(currentValue);
    } else setBurnPercentageValue(burnPercentageValue);
  }

  function handleTradingFeePercentageValue(event: any) {
    let isPercentageValueAccordinglyFilters: Boolean = false;
    let currentValue = Number(event.target.value);
    // Filter by max number
    if (currentValue <= 50) {
      isPercentageValueAccordinglyFilters = true;
    }

    if (isPercentageValueAccordinglyFilters) {
      console.log(event.target.value);
      setTradingFeePercentageValue(currentValue);
    } else setTradingFeePercentageValue(tradingFeePercentageValue);
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4 h-full">
        <div className="">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 ">
            Special Features:
          </span>
        </div>
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div className="flex items-center h-auto w-full space-x-2">
            <div className="h-full flex items-center">
              <button
                onClick={() => setBurnCheckBox(!burnCheckBox)}
                className={`h-5 w-5 relative ${
                  !burnCheckBox ? "border" : ""
                } border-white/40 bg-white/20 rounded-md`}
              >
                {burnCheckBox ? <CheckedInputBoxSVG /> : ""}
              </button>
            </div>
            <div className="h-full">
              <div className="font-medium text-sm">Burn</div>
              <div className="text-xs font-sans text-white/60">
                A percentage of tokens will be sent to the burn address for each
                on-chain transfer
              </div>
            </div>
          </div>
          <div
            className={`
        ${
          burnCheckBox
            ? "text-white"
            : "text-white/40 [&_input]:placeholder:text-white/20"
        } 
        sm:w-40 mt-2 sm:mt-0 sm:ml-5 flex justify-center items-center bg-white/10 rounded-lg px-2`}
          >
            <input
              disabled={!burnCheckBox}
              value={burnPercentageValue}
              onChange={handleBurnPercentageValue}
              className="w-full min-w-10 bg-transparent rounded-lg p-2 focus:outline-none"
              placeholder="0.1"
            />
            %
          </div>
        </div>
        <div className="flex items-center  flex-wrap md:flex-nowrap">
          <div className="flex items-center h-auto w-full space-x-2">
            <div className="h-full flex items-center">
              <button
                onClick={() => setTradingFeeCheckBox(!tradingFeeCheckBox)}
                className={`h-5 w-5 relative ${
                  !tradingFeeCheckBox ? "border" : ""
                } border-white/40 bg-white/20 rounded-md`}
              >
                {tradingFeeCheckBox ? <CheckedInputBoxSVG /> : ""}
              </button>
            </div>
            <div className="h-full">
              <div className="font-medium text-sm">Trading Fees</div>
              <div className="text-xs font-sans text-white/60">
                {`A percentage of tokens will be sent to the creator's address for each on-chain transfer`}
              </div>
            </div>
          </div>
          <div
            className={`
        ${
          tradingFeeCheckBox
            ? "text-white"
            : "text-white/40 [&_input]:placeholder:text-white/20"
        } 
        sm:w-40 mt-2 sm:mt-0 sm:ml-5 flex justify-center items-center bg-white/10 rounded-lg px-2`}
          >
            <input
              disabled={!tradingFeeCheckBox}
              value={tradingFeePercentageValue}
              onChange={handleTradingFeePercentageValue}
              className="min-w-10 w-full bg-transparent rounded-lg p-2 focus:outline-none"
              placeholder="0.1"
            />
            %
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center h-auto w-full space-x-2">
            <div className="h-full flex items-center">
              <button
                onClick={() => setSupportSupplyInceaseCheckBox(!supportSupplyInceaseCheckBox)}
                className={`h-5 w-5 relative ${
                  !supportSupplyInceaseCheckBox ? "border" : ""
                } border-white/40 bg-white/20 rounded-md`}
              >
                {supportSupplyInceaseCheckBox ? <CheckedInputBoxSVG /> : ""}
              </button>
            </div>
            <div className="h-full">
              <div className="font-medium text-sm">
                Supports Supply Increase
              </div>
              <div className="text-xs font-sans text-white/60">
                Allows the creator to issue additional tokens after the token
                creation
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="font-bold">Service Fees:</div>
          <div className="text-sm text-white/40">0.02 ETH</div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <button className="w-full md:w-max bg-supernova text-black font-bold py-2 md:px-14 rounded-md">
          Connect to a wallet
        </button>
      </div>
    </div>
  );
}

function InfoPannel() {
  return (
    <div className="px-6 md:px-0 mt-20 text-3xl w-full text-black font-bold">
      <div className="text-xl md:text-3xl">No coding required.</div>
      <div className="text-4xl md:text-3xl">Create your own tokens with one click!</div>
      <div className="flex items-end space-x-1 mt-5 font-Montserrat">
        <div className="font-bold text-4xl text-black">30,922</div>
        <div className="text-sm font-normal ">Tokens Created</div>
      </div>
      <div className="mt-10 flex items-center space-x-4">
        {/* Play Icon */}
        <div className="border border-black max-w-max rounded-full">
          <div className="border border-black m-1 rounded-full">
            <div className="border m-1 bg-black rounded-full h-14 w-14 flex justify-center items-center">
              <BiCaretRight className="text-supernova" />
            </div>
          </div>
        </div>
        <div className="text-sm">
          <span className="border-b-2 border-black pb-1">See</span>
          <span className=""> how it works</span>
        </div>
      </div>
    </div>
  );
}

function CheckedInputBoxSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
      <linearGradient id="a" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0" stopColor="#32c5ff" />
        <stop offset="1" stopColor="#b620e0" />
      </linearGradient>
      <g fill="none" fillRule="evenodd">
        <rect fill="url(#a)" height="20" rx="4" width="20" />
        <path
          d="M4.872 9.117 8.8 13.045l7.071-7.07"
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
