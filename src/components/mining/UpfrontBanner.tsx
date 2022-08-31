import { Tab } from "@headlessui/react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { SearchByPoolAddress } from "./SearchByPoolAddress";
import { Switch, ListBox } from "@/components/common";
import { SelectorIcon } from "@heroicons/react/outline";
import { SmMiningCard } from "./SmMiningCard";

export function UpfrontBanner() {
  return (
    <div className="text-2xs sm:text-sm pt-10 md:pt-[80px] w-full h-full bg-gradient-to-b from-lightEarlyDawn to-supernova">
      <div className="bg-no-repeat bg-auto bg-right md:bg-mining-banner w-full h-max md:h-[400px] md:px-24 px-5">
        <div className="w-full h-full pt-10 md:pt-20">
          <div className="text-black/900 font-bold text-[7vw] md:text-3xl">
            Provide Liquidity for Trading Pairs
          </div>
          <div className="sm:pt-4 pb-2 text-gray-900 font-black text-[7vw] md:text-4xl">
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
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
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
    <div className="w-full px-0 h-max relative mt-10 md:-top-14">
      <Tab.Group>
        <Tab.List className="z-50 flex justify-between items-start px-4 md:px-24 w-full pb-4 sm:pb-0">
          {/* For Small to Mid Size */}
          <div className="md:hidden">
            <ListBox
              {...{
                listBoxFilter: miningStatusFilter,
                ListBoxButton: ListBoxMiningStatusFilterButton,
                ListBoxOptions: ListBoxMiningStatusFilterOptions,
              }}
            />
          </div>
          {/* For Mid To Large Size */}
          <div className="hidden max-w-xs md:flex items-start space-x-7 ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }: { selected: Boolean }) =>
                  classNames(
                    " py-2.5 text-sm font-medium leading-5 outline-none",
                    "",
                    selected
                      ? "pb-5 text-black/900 font-bold border-b-2 border-black/900"
                      : " text-black/900/80 hover:text-black"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
          <div className="text-black/900 flex items-center">
            <div className="space-x-1 md:space-x-3 flex items-center">
              <div className="text-[3vw] md:text-[1rem] min-w-max font-medium">
                My Liquidity Only
              </div>
              <div className="form-control">
                <Switch />
              </div>
              <ListBox
                {...{
                  listBoxFilter: miningCardsFilter,
                  ListBoxButton: ListBoxFilterButton,
                }}
              />
            </div>
          </div>
        </Tab.List>
        <Tab.Panels className="z-0 outline-none flex flex-wrap  items-baseline justify-between px-7 md:px-24 w-full bg-supernova h-full border-t border-black">
          {Object.values(categories).map((instance, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "outline-none flex flex-wrap rounded-xl text-black/900 h-full w-full justify-between items-baseline space-y-20",
                ""
              )}
            >
              {instance.map((item, idx) => (
                <SmMiningCard key={idx} />
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function ListBoxFilterButton({ selected }: { selected: { name: string } }) {
  return (
    <div className="relative w-full cursor-default rounded-full md:rounded-lg border border-black py-2 px-3 md:pl-3 md:pr-10 text-left shadow-md sm:text-sm">
      <span className="hidden md:block truncate text-xs">{selected.name}</span>
      <span className="hidden pointer-events-none absolute inset-y-0 right-0 md:flex items-center pr-2">
        <SelectorIcon className="h-5 w-5 text-black/900" aria-hidden={true} />
      </span>
      <SelectorIcon
        className="md:hidden h-5 w-5 text-black/900"
        aria-hidden={true}
      />
    </div>
  );
}

function ListBoxMiningStatusFilterButton({
  selected,
}: {
  selected: { name: string };
}) {
  return (
    <div className="flex items-center relative w-full cursor-default rounded-full md:rounded-lg border border-black py-2 px-3 md:pl-3 md:pr-10 text-left shadow-md sm:text-sm">
      <span className=" truncate text-xs text-black mr-4">{selected.name}</span>
      <span className=" pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <SelectorIcon className="h-5 w-5 text-black/900" aria-hidden={true} />
      </span>
    </div>
  );
}

function ListBoxMiningStatusFilterOptions({
  option,
}: {
  option: { name: string };
}) {
  return (
    <Tab>
      <span className=" block truncate min-w-max w-full">{option.name}</span>
    </Tab>
  );
}

const miningStatusFilter: { name: string }[] = [
  { name: "Active" },
  { name: "Ended" },
];

const miningCardsFilter: { name: string }[] = [
  { name: "Sort by APR" },
  { name: "Available Balance" },
  { name: "Sort by value locked" },
];
