import { BsSearch } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import { CrowdPoolingInfoTabs } from "./CrowdPoolingInfoTabs";

export function SearchByAddress() {
  return (
    <div className="flex flex-col items-center">
      <div className="drop-shadow-xl shadow-black pl-6 bg-black w-max rounded-2xl text-white flex items-center space-x-4">
        <BsSearch className="md:text-2xl" />
        <input
          className="py-4 md:py-6 bg-black outline-none w-24 md:w-[27em]"
          type="text"
          placeholder="Search by token address or Crowdpooling address"
        />
        <button className="text-xs md:text-base py-6 rounded-2xl translate-x-1 flex items-center space-x-2 hover:bg-paleGrey bg-supernova text-black/900 px-5 h-full font-semibold">
          <span className="">Search</span>
          <HiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

