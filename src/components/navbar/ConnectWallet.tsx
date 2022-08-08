import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";

export function ConnectWallet() {
    return (
      <div className="fixed sm:relative bottom-0 right-0 xl:mr-6">
        <div className="justify-between py-2 px-2 xl:px-8 xl:pl-16 xl:pr-2 xl:py-0 bottom-0 right-2 xl:w-auto flex items-center xl:h-full">
          <div className="scale-75 flex items-center space-x-3 ">
            <button className="flex items-center min-w-max">
              <Image
                src="/assets/icons/dswap_home_icon.png"
                className=" object-contain"
                height={35}
                width={35}
                alt="dswap_home_icon"
              />
            </button>
            <button className="flex items-center min-w-max">
              <Image
                src="/assets/icons/dswap_account.png"
                className="object-contain"
                height={35}
                width={35}
                alt="dswap_home_icon"
              />
            </button>
          </div>
          <div className=" space-x-2 flex items-center  xl:ml-7  mr-4 bg-black/500  rounded-lg">
            {/* Bright Dot Icon */}
            <div className="ml-2 my-2 rounded-lg bg-white/40 h-2 w-2 flex justify-center items-center">
              <div className="rounded-full bg-white/90 h-1 w-1"></div>
            </div>
            {/* Network Name */}
            <div className="translate-x-1 text-[0.5rem] lg:text-xs items-center space-x-2 flex min-w-max text-white transform -translate-y-[2px]">
              <div className="font-bold translate-y-[1px] -translate-x-1">
                POP
              </div>
              <button className="group translate-y-[2px] px-5 pb-2 pt-2 rounded-lg border-solid border-[1px] border-paleGrey bg-gray-900">
                <div className=" font-semibold tracking-wide transform -translate-y-[1px] w-full h-full text-supernova text-[1em]">
                  Connect to a wallet
                </div>
              </button>
            </div>
          </div>
          <div className="min-w-max min-h-max">
            <CgMenuGridO className="text-black text-3xl object-contain" />
          </div>
        </div>
      </div>
    );
  }