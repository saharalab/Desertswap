import { Dialog, Tab, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, ReactNode, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  BsArrowRightCircleFill,
  BsCurrencyBitcoin,
  BsShareFill,
} from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { RiExternalLinkFill } from "react-icons/ri";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function MiningCardModal({
  coinDetail,
  button,
}: {
  coinDetail: { subName: string; name: string; icon: any };
  button: any;
}) {
  let [categories] = useState({
    Stake: () => (
      <>
        <div className="pl-4 flex items-center space-x-1">
          <span className="text-sm">
            Get {coinDetail.subName || coinDetail.name} LP
          </span>
          <RiExternalLinkFill />
        </div>
        <div className="pt-6 flex justify-center">
          <button className="bg-supernova/10 px-20 py-4 rounded-xl cursor-not-allowed flex items-center">
            <BsArrowRightCircleFill className="mr-2" />
            Stake
          </button>
        </div>
      </>
    ),
    Unstake: () => (
      <>
        <div className="flex justify-end space-x-2">
          <div className="bg-white/10 hover:bg-white/20 hover:text-white/60 cursor-pointer px-4 py-2 rounded-md text-xs">
            25%
          </div>
          <div className="bg-white/10 hover:bg-white/20 hover:text-white/60 cursor-pointer px-4 py-2 rounded-md text-xs">
            50%
          </div>
          <div className="bg-white/10 hover:bg-white/20 hover:text-white/60 cursor-pointer px-4 py-2 rounded-md text-xs">
            75%
          </div>
          <div className="bg-white/10 hover:bg-white/20 hover:text-white/60 cursor-pointer px-4 py-2 rounded-md text-xs">
            100%
          </div>
        </div>
        <div className="pt-6 flex justify-center">
          <button className="bg-supernova/10 px-20 py-4 rounded-xl cursor-not-allowed flex items-center">
            <BsArrowRightCircleFill className="mr-2" />
            Unstake
          </button>
        </div>
      </>
    ),
  });
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-black/900 text-supernova w-full py-4 rounded-lg"
      >
        {button}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-supernova/40 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-2xl w-full transform overflow-hidden rounded-2xl bg-black/900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white flex justify-between pr-1"
                  >
                    <div className="flex items-center">
                      {/* ETH */}
                      <div className="grid place-content-center relative -left-2 p-1 z-0 bg-blue-600 max-w-max rounded-full">
                        <coinDetail.icon className="text-base text-white -rotate-3" />
                      </div>
                      <div className="font-Montserrat font-bold">
                        {coinDetail.name} LP Mining
                      </div>
                      <a href="#" className="ml-2 p-2 rounded-md">
                        <BsShareFill />
                      </a>
                    </div>
                    <button onClick={closeModal} className="">
                      <ImCross />
                    </button>
                  </Dialog.Title>
                  <div className="">
                    <div className="mt-4 text-sm flex items-center space-x-1">
                      <div className="">
                        Amount Staked:{" "}
                        <span className="text-white">0 ≈ $0</span>
                      </div>
                      <AiOutlineQuestionCircle />
                    </div>
                    <div className="text-sm mt-5 border border-white/10 rounded-2xl p-5 flex justify-between">
                      <div className="space-y-3">
                        <div className="">Token</div>
                        <div className="flex items-center space-x-1">
                          <Image
                            className="rounded-full object-contain"
                            src="/assets/icons/Desertswap Logo.png"
                            height={20}
                            width={20}
                            alt="reward-token-logo"
                          />
                          <span className="text-white font-bold font-Montserrat tracking-wider">
                            DSwap
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="">APR</div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-bold font-Montserrat tracking-wider">
                            5.2%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="">Claimable Rewards</div>
                        <div className="flex items-center space-x-2 justify-end">
                          <span className="text-white font-medium font-Montserrat tracking-wider">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <Tab.Group>
                      <Tab.List className="">
                        <div className="text-base space-x-7 flex mt-5">
                          {Object.keys(categories).map((category) => (
                            <Tab
                              key={category}
                              className={({
                                selected,
                              }: {
                                selected: Boolean;
                              }) =>
                                classNames(
                                  selected
                                    ? "text-supernova"
                                    : "hover:text-supernova text-white"
                                )
                              }
                            >
                              {category}
                            </Tab>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <div className="w-max text-sm ">
                            Available: 0{" "}
                            <span className="text-supernova bg-supernova/20 p-1 rounded-lg text-xs">
                              MAX
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 bg-white/10 px-4 py-4 rounded-lg flex items-center space-x-1 font-bold">
                          <div className="text-white">{coinDetail.subName ?? coinDetail.name}</div>
                          <input
                            className=" w-full bg-transparent outline-none text-right placeholder:text-white/40 text-white text-xl"
                            placeholder="0.0"
                            type="text"
                            id=""
                          />
                        </div>
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        {Object.values(categories).map(
                          (Item: any, idx: number) => (
                            <Tab.Panel key={idx}>
                              <Item />
                            </Tab.Panel>
                          )
                        )}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
