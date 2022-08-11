import { BsSearch } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

export function SearchByPoolAddress() {
  return (
    <div className="mt-12 drop-shadow-xl shadow-black pl-6 bg-black w-max rounded-xl text-white flex items-center space-x-4">
      <BsSearch className="" />
      <input
        className="text-sm py-3 md:py-3 bg-black outline-none w-24 md:w-72 placeholder:text-white"
        type="text"
        placeholder="Search by token symbol or address"
      />
      <button className="text-xs md:text-sm py-5 rounded-xl translate-x-1 flex items-center space-x-2 hover:bg-paleGrey bg-supernova text-black/900 px-3 h-full font-semibold">
        <span className="">Search</span>
        <HiOutlineArrowRight />
      </button>
    </div>
  );
}
