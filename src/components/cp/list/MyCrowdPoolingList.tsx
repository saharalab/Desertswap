import { BsSearch } from "react-icons/bs";

export function MyCrowdPoolingList() {
  return (
    <div className="w-full mt-16">
      <div className="mx-12 mt-10 bg-black text-white rounded-2xl py-6 px-7 space-y-6">
        <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row w-full justify-between">
          <div className="text-lg">My Crowdpooling List</div>
          <button className="font-medium rounded-lg py-3 px-4 bg-supernova text-black text-sm">
            Launch a Crowdpooling Campaign
          </button>
        </div>
        <div className="flex items-center space-x-2 border-b border-white/20 pb-2 text-sm">
          <BsSearch className="text-lg" />
          <input
            type="text"
            className="bg-transparent w-full placeholder:text-white/60 outline-none"
            placeholder="Search by token address or Crowdpooling address"
          />
        </div>
        <div className="pb-4 hidden md:flex">
          <CrowdpoolingTable />
        </div>
      </div>
    </div>
  );
}

function CrowdpoolingTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-white text-black text-sm">
          <th className="font-normal py-3 pr-5">Crowdpooling Address</th>
          <th className="font-normal py-3">Price</th>
          <th className="font-normal py-3">Total Supply</th>
          <th className="font-normal py-3 pr-3">Expected Liquidity Pool Size</th>
          <th className="font-normal py-3">Liquidity Protection</th>
          <th className="font-normal py-3">Progress</th>
          <th className="font-normal py-3">Status</th>
          <th className="font-normal py-3 pr-14">Side</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-4 pl-9 text-white/60">No results found</td>
        </tr>
      </tbody>
    </table>
  );
}
