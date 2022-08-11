import { Tab } from "@headlessui/react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { SearchByPoolAddress } from "./SearchByPoolAddress";
import { Switch, ListBox } from "@/utils";

export function UpfrontBanner() {
  return (
    <div className="pt-[80px] w-full h-full bg-gradient-to-b from-lightEarlyDawn to-supernova">
      <div className="bg-no-repeat bg-auto bg-right bg-mining-banner w-auto h-[400px] mx-24">
        <div className="w-full h-full pt-20">
          <div className="text-black/900 font-bold text-3xl">
            Provide Liquidity for Trading Pairs
          </div>
          <div className="pt-4 pb-2 text-gray-900 font-black text-4xl">
            $24,145,811.4
          </div>
          <div className="text-black/900 flex items-center space-x-2">
            <div className="">Total Value Locked (TVL)</div>
            <a href="" className=" flex items-center space-x-1">
              <span className="text-xs md:text-xs font-normal hover:underline decoration-black underline-offset-2">
                Tutorial
              </span>
              <BsArrowUpRight className="text-xs" />
            </a>
          </div>
          <SearchByPoolAddress />
        </div>
      </div>
      <ActiveEndedTabs />
    </div>
  );
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function ActiveEndedTabs() {
  let [categories] = useState({
    Active: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Ended: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0 h-max relative -top-14">
      <Tab.Group>
        <Tab.List className="flex justify-between items-center px-24 w-full">
          <div className="max-w-xs flex items-start space-x-7 ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    " py-2.5 text-sm font-medium leading-5",
                    "",
                    selected
                      ? "pb-5 text-black/900 font-bold border-b-2 border-black/900"
                      : " text-black/900/80 hover:bg-white/[0.12] hover:text-black"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
          <div className="text-black/900">
            <div className="space-x-3 flex items-center">
              <div className="font-medium">My Liquidity Only</div>
              <div className="form-control">
                <Switch />
              </div>
              <ListBox />
            </div>
          </div>
        </Tab.List>
        <Tab.Panels className="px-24 w-full bg-supernova h-full">
          {Object.values(categories).map((item, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl text-black/900 h-40",
                ""
              )}
            >
              <div className="pt-10 h-full text-sm">
                You are not currently providing liquidity for any LP pools.
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
