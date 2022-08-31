import { BsSearch } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

export function MyTokenList() {
  return (
    <div className="text-black mt-20 mb-10">
      <div className="text-2xl px-4 sm:px-10 lg:px-24 flex justify-between lg:flex-row flex-col space-y-4">
        <div className="font-bold">My Token List</div>
        <SearchBar />
      </div>
      <div className="hidden lg:flex w-full">
        <TokenTable />
      </div>
      <div className="lg:hidden mb-5">
        <NoResultsFound />
      </div>
    </div>
  );
}

export function SearchBar() {
  return (
    <div className="text-sm border border-black drop-shadow-xl shadow-black pl-6 w-full lg:w-max rounded-2xl text-white flex items-center justify-between">
      <input
        className="py-3 bg-transparent outline-none placeholder:text-black/900 text-black flex-grow"
        type="text"
        placeholder="Search..."
      />
      <button className="text-lg rounded-2xl translate-x-1 flex items-center  text-black px-5 h-full font-semibold">
        <BsSearch className="md:text-2xl" />
      </button>
    </div>
  );
}

function TokenTable() {
  return (
    <div className="px-24 text-black text-sm py-8  [&_th]:font-normal">
      <table className="w-full text-left table-fixed shadow-xl rounded-t-lg  border-black border">
        <thead className="">
          <tr className=" bg-black text-white">
            <th className="">
              <div className="p-[20px] text-inherit w-max">Token</div>
            </th>
            <th>
              <div className="p-[20px] text-inherit w-max">Token Name</div>
            </th>
            <th>
              <div className="p-[20px] text-inherit w-max">Token Supply</div>
            </th>
            <th>
              <div className="p-[20px] text-inherit w-max">Holders</div>
            </th>
            <th>
              <div className="p-[20px] text-inherit w-max">Balance</div>
            </th>
            <th>
              <div className="p-[20px] text-inherit w-max">Operation</div>
            </th>
          </tr>
        </thead>
        <tbody className="cursor-pointer bg-gradient-to-br from-white/10 via-yellow-200/10 to-white/10"></tbody>
      </table>
      <NoResultsFound />
    </div>
  );
}

function NoResultsFound() {
  return (
    <div className="w-full flex flex-col items-center py-10 space-y-2">
      <div className="flex">
        <div className="rounded-full h-5 w-5 bg-black mix-blend-multiply"></div>
        <div className="rounded-full h-5 w-5 bg-supernova -translate-x-2 mix-blend-multiply"></div>
      </div>
      <div className="">No results found</div>
    </div>
  );
}
