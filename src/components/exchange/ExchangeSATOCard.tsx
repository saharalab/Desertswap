import { Switch } from "./ExpertModeSwitch"
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
// import { ToolTipProvider } from "./Context";

export function ExchangeSATOCard() {
  const [openTradeSettingPannel, setOpenTradeSettingPannel] =
    useState<Boolean>(false);
  return (
    <div className="w-full sm:w-96 xl:w-full h-max">
      <div className="flex justify-center scale-85 sm:scale-75 md:scale-85 xl:scale-95 xl:justify-center xl:pt-6">
        <div className="relative lg:my-10 xl:my-0  xl:mt-20 h-max bg-black/900 px-6 pt-6 pb-12 w-max max-w-[400px] shadow-lg sm:min-w-[400px] min-w-[350px] md:mx-10 lg:mx-0 rounded-2xl flex flex-col ">
          {openTradeSettingPannel ? (
            <div className="left-0 rounded-2xl absolute top-0 h-full w-full">
              <TradeSettingPannel
                {...{ openTradeSettingPannel, setOpenTradeSettingPannel }}
              />
            </div>
          ) : (
            ""
          )}
          <div
            className={`${
              openTradeSettingPannel ? "invisible" : ""
            } flex flex-col justify-end`}
          >
            <div className="self-end flex mb-3">
              <PriceQuoteAutoRefreshes />
              <InviteYourFriends />
              <button onClick={() => setOpenTradeSettingPannel(true)}>
                <TradeSetting />
              </button>
            </div>
            <PayAndReceiveForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function TradeSettingPannel({
  openTradeSettingPannel,
  setOpenTradeSettingPannel,
}: {
  openTradeSettingPannel: Boolean;
  setOpenTradeSettingPannel: any;
}) {
  const [slippageTolerance] = useState<{ STPercentage: string }[]>([
    {
      STPercentage: "0.5%",
    },
    {
      STPercentage: "1%",
    },
    {
      STPercentage: "3%",
    },
  ]);
  const [selected, setSelected] = useState(slippageTolerance[0]);

  return (
    <div className="px-3 py-4">
      <div className="flex items-center">
        <button onClick={() => setOpenTradeSettingPannel(false)}>
          <FiArrowLeft className="text-white text-3xl" />
        </button>
        <div className="flex-grow text-center mr-6 text-base">
          Trade Settings
        </div>
      </div>
      <div className="px-4">
        <div className="mt-6 text-white flex items-center space-x-2">
          <div className="text-sm">Slippage Tolerance</div>
          <AiOutlineQuestionCircle className="text-lg" />
        </div>
        <div className="">
          <div className="flex items-center space-x-2">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Slippage Tolerance
              </RadioGroup.Label>
              <div className="space-x-2 flex items-center py-4">
                {slippageTolerance.map(
                  (item: { STPercentage: string }, idx: number) => (
                    <RadioGroup.Option
                      key={idx}
                      value={item}
                      className={({ active, checked }) =>
                        `${
                          checked
                            ? "bg-supernova text-black"
                            : "bg-white/10 text-white"
                        }
                    max-w-min text-sm relative flex cursor-pointer rounded-xl px-6 py-2 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <div className="flex w-full items-center justify-between">
                          <div className="min-w-max font-bold font-sans">
                            {item.STPercentage}
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>
                  )
                )}
              </div>
            </RadioGroup>
            <input
              className="outline-none border-none max-w-min min-w-[60px] max-h-min py-[.4rem] px-3 bg-white/10 shadow-md font-bold text-white rounded-xl text-base"
              type="text"
              id=""
            />
            <div className="text-white">%</div>
          </div>
          <div className="mt-2 text-white flex items-center space-x-2">
            <div className="text-sm">Transaction Deadline</div>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input
              className="outline-none border-none max-w-min w-[4rem] max-h-min py-[.4rem] px-3 bg-white/10 shadow-md text-white rounded-xl text-base"
              type="text"
              id=""
            />
            <div className="text-white">min</div>
          </div>
          <div className="flex justify-between mt-4 text-white">
            <div className="text-sm">Expert Mode</div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}

function PayAndReceiveForm() {
  return (
    <div className="">
      <PayAble />
      <div className="flex justify-center mb-2">
        <Image
          src="/assets/icons/ds-swap-icon.png"
          width={30}
          height={30}
          className="object-contain"
          alt="ds-swap-icon"
        />
      </div>
      <Receiver />
      <div className="mb-3 text-sm text-center text-lightEarlyDawn/70 font-semibold">
        1 BNB = 50.09 SATO
      </div>
      <button className="bg-supernova w-full rounded-xl border-black border-2">
        <div className="px-3 py-5 bg-gradient-to-br from-black/20 via-transparent to-black/20 rounded-lg">
          <span className="text-black/900 font-bold ">Connect Wallet</span>
        </div>
      </button>
    </div>
  );
}

function PayAble() {
  return (
    <div>
      <div className="text-floralWhite  ">Pay</div>
      <div className="flex justify-between items-center my-2 bg-lightGray p-3 rounded-xl border-solid border-[1px] border-supernova">
        <button className="flex justify-center items-center min-w-max mr-3">
          <Image
            src="/assets/icons/sahara_labs_logo-transparent.png"
            height={40}
            width={54}
            className=" object-contain"
            alt="Sahara Token"
          />
          <span className="text-base font-bold text-floralWhite">SATO</span>
        </button>
        <input
          type="text"
          className="text-xl w-32  mr-2 text-right bg-transparent outline-none font-medium text-white placeholder:text-2xl placeholder:text-white"
          placeholder="0"
        />
      </div>
    </div>
  );
}

function Receiver() {
  return (
    <div>
      <div className="text-floralWhite  ">
        Receive{" "}
        <span className="font-sans font-normal">
          (<span className="font-StyreneAWeb">Estimated</span>)
        </span>
      </div>
      <div className="flex justify-between items-center my-2 bg-lightGray p-3 rounded-xl border-solid border-[1px] border-supernova">
        <button className="flex justify-center items-center min-w-max mr-3">
          <Image
            src="/assets/icons/binance-logo.png"
            height={40}
            width={54}
            className=" object-contain"
            alt="Sahara Token"
          />
          <span className="font-bold text-floralWhite">BNB</span>
        </button>
        <input
          type="text"
          className="text-xl w-32 mr-2 text-right bg-transparent outline-none font-medium text-white placeholder:text-2xl placeholder:text-white"
          placeholder="0"
        />
      </div>
    </div>
  );
}

function TradeSetting() {
  return (
    <div className="hover:bg-supernova/10 bg-lightGray/50 p-3 rounded-xl scale-75 grid justify-items-center">
      <Image
        src="/assets/icons/settings.png"
        height={33}
        width={33}
        className=" object-contain"
        alt="Trade Settings"
      />
    </div>
  );
}

function InviteYourFriends() {
  return (
    <button className="hover:bg-supernova/10 bg-lightGray/50 p-3 rounded-xl scale-75 grid justify-items-center">
      <Image
        src="/assets/icons/share-icon.png"
        height={33}
        className=" object-contain"
        width={33}
        alt="Trade Settings"
      />
    </button>
  );
}

function PriceQuoteAutoRefreshes() {
  return (
    <button className="hover:bg-supernova/10 bg-lightGray/50 p-3 rounded-xl scale-75 grid justify-items-center">
      <Image
        src="/assets/icons/price refrsh.png"
        className=" object-contain"
        height={33}
        width={33}
        alt="Trade Settings"
      />
    </button>
  );
}
