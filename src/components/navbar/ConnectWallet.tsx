import Image from "next/image";
import { Fragment } from "react";
import { ConnectWalletBtn } from "@/components/common";
import { CgFileDocument, CgMenuGridO } from "react-icons/cg";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BsChatDots, BsTriangleFill } from "react-icons/bs";
import { GiSpeaker } from "react-icons/gi";
import { IoCaretDownSharp } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export function ConnectWallet() {
  return (
    <div className="sm:relative xl:ml-6">
      <div className="justify-between py-2 px-2 xl:p-0 xl:pr-2 bottom-0 right-2 xl:w-auto flex items-center xl:h-full">
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
            <ConnectWalletBtn />
          </div>
        </div>
        <MenuDropDown />
      </div>
    </div>
  );
}

export function MenuDropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        <Menu.Button className="min-w-max min-h-max">
          <CgMenuGridO className="text-black text-3xl object-contain" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="text-white/60 absolute right-0 mt-4 w-72 origin-top-right divide-y divide-gray-100 rounded-xl bg-black shadow-white/40 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="relative z-10 py-2 ">
            <div className="z-0 right-2 absolute -top-3 w-4 h-4">
              <BsTriangleFill className="text-black" />
            </div>
            <div className="space-y-2">
              <Disclosure>
                {({ open }: { open: Boolean }) => (
                  <div className="text-sm px-4 py-2 ">
                    <div className="flex justify-between">
                      <div className="">Endpoint</div>
                      <Disclosure.Button className="text-white flex items-center space-x-2">
                        <span className="">Global 504.5ms</span>
                        <IoCaretDownSharp
                          className={`${
                            open ? "rotate-180 transform" : ""
                          }  text-sm text-white`}
                        />
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="pt-4 space-y-2 flex flex-col ">
                      <div data-tip="#493849" className="tooltip max-w-min">
                        <button className="py-2 px-4 bg-supernova rounded-xl text-black max-w-min min-w-max">
                          Global 504.5ms
                        </button>
                      </div>
                      <button className="py-2 hover:bg-supernova px-4 bg-white/60 rounded-xl text-black max-w-min">
                        Custom
                      </button>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }: { open: Boolean }) => (
                  <div className="text-sm px-4 ">
                    <div className="flex justify-between">
                      <div className="">Language</div>
                      <Disclosure.Button className="text-white flex items-center space-x-2">
                        <span className="">English</span>
                        <IoCaretDownSharp
                          className={`${
                            open ? "rotate-180 transform" : ""
                          }  text-sm text-white`}
                        />
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="pt-4 space-y-2 flex flex-col ">
                      <div className="flex space-x-3">
                        <button className="py-2 px-4 bg-supernova rounded-xl text-black max-w-min min-w-max">
                          English
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Français
                        </button>
                      </div>
                      <div className="flex space-x-3">
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Pусский
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          한국인
                        </button>
                      </div>
                      <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                        Bahasa Indonesia
                      </button>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }: { open: Boolean }) => (
                  <div className="text-sm px-4 py-2 ">
                    <div className="flex justify-between">
                      <div className="">Network</div>
                      <Disclosure.Button className="text-white flex items-center space-x-2">
                        <span className="">ETH</span>
                        <IoCaretDownSharp
                          className={`${
                            open ? "rotate-180 transform" : ""
                          }  text-sm text-white`}
                        />
                      </Disclosure.Button>
                    </div>
                    <Disclosure.Panel className="pt-4 space-y-2 flex flex-col ">
                      <div className="flex space-x-3">
                        <button className="py-2 px-4 bg-supernova rounded-xl text-black max-w-min min-w-max">
                          ETH
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          BSC
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Heco
                        </button>
                      </div>
                      <div className="flex space-x-3">
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Polygon
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Arbitrum
                        </button>
                      </div>
                      <div className="flex space-x-3">
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          OKChain
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Moonriver
                        </button>
                      </div>
                      <div className="flex space-x-3">
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Aurora
                        </button>
                        <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                          Boba
                        </button>
                      </div>
                      <button className="py-2 px-4 hover:bg-supernova bg-white/60 rounded-xl text-black max-w-min min-w-max">
                        Avalanche
                      </button>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className="border-t-supernova border-t w-full mt-2">
              <button className="flex items-center space-x-2 px-4 my-3">
                <AiOutlineQuestionCircle className="text-xl" />
                <span className="">Help</span>
              </button>
              <button className="flex items-center space-x-2 px-4 my-3">
                <GiSpeaker className="text-xl" />
                <span className="">Announcements</span>
              </button>
              <button className="flex items-center space-x-2 px-4 my-3">
                <BsChatDots className="text-xl" />
                <span className="">Forum</span>
              </button>
              <button className="flex items-center space-x-2 px-4 my-3">
                <CgFileDocument className="text-xl" />
                <span className="">Docs</span>
              </button>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
