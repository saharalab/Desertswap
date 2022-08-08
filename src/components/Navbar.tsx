import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo, PopOver } from "../utils";
import { CgMenuGridO } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";

import {
  ArrowNarrowDownIcon,
  ArrowNarrowRightIcon,
  LockClosedIcon,
  MenuAlt3Icon,
  XIcon,
} from "@heroicons/react/outline";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center h-max min-w-full xl:ml-4 bg-supernova md:bg-transparent">
      <div className=" md:px-3 2xl:container w-full flex justify-between items-center ">
        <div className="flex justify-between xl:justify-start w-full min-w-max space-x-5">
          <div className="px-3">
            <Logo />
          </div>
          <div className="hidden xl:flex">
            {/* Navigations */}
            <Navigations />
          </div>
          {/* Responsive Menu */}
          <div className="xl:hidden h-full w-full flex justify-end items-center">
            <ResponsiveMenu {...{ isOpen, setIsOpen }} />
          </div>
        </div>
        {/* Wallet Connect */}
        <div className="hidden sm:flex h-full">
          <NavConnectWallet />
        </div>
        {/* <div className="hidden sm:hidden h-full w-full justify-end items-center">
          <ResponsiveMenu {...{ isOpen, setIsOpen }} />
        </div> */}
      </div>
    </div>
  );
};

function ResponsiveMenu({ isOpen, setIsOpen }: any) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function autoOpenCloseModal() {
    console.log(isOpen);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <div className="max-w-max cursor-pointer">
      <div className="max-w-max">
        {!isOpen ? (
          <button
            type="button"
            onClick={autoOpenCloseModal}
            className=" rounded-md pl-4 pr-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <MenuAlt3Icon className="h-7 object-contain text-black/900" />
          </button>
        ) : (
          <div className=" rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <XIcon className="h-7 object-contain text-black/900" />
          </div>
        )}
      </div>
      <MyModal {...{ isOpen, setIsOpen, closeModal, openModal }} />
    </div>
  );
}

function MyModal({ isOpen, setIsOpen, closeModal, openModal }: any) {
  return (
    <div className="relative">
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
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-supernova w-full max-w-md transform overflow-x-hidden fixed bottom-0 top-8 pb-10 overflow-y-visible scroll-smooth">
                  <div className="h-full w-full ">
                    <MobileNavigations />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

function MobileSubNavDisclosure({ popOverItems, popOverName, href }: any) {
  const route: string = useRouter().pathname;

  return (
    <Disclosure
      as="div"
      className="mt-2 w-full flex flex-col items-start text-base"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className={"mx-3 ml-6"}>
            <span
              className={
                (route == href ? "text-black/900 font-bold" : "text-black/60") +
                " font-medium flex items-center"
              }
            >
              {popOverName}
              <MdArrowDropDown className="text-xl" />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pb-2 space-y-3 text-black/60">
            {popOverItems.map((item: PopOverItemType, index: number) => (
              <div
                key={index}
                id={item.name}
                className="pl-6 hover:bg-darkSupernova min-h-max group justify-between  !min-w-[100vw] py-2 flex items-center"
              >
                <div className="flex h-max w-max ">
                  <div className="relative min-w-max h-max object-contain max-h-5 mt-1 mr-3">
                    <item.icon />
                  </div>
                  <div className=" w-max text-left">
                    <div className="text-sm">{item.name}</div>
                    <div className="text-xs ">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function MobileNavigations() {
  return (
    <div className="pt-4 h-[34em] top-10 bottom-0 flex flex-col md:flex-row space-y-5 overflow-x-hidden relative items-start text-sm">
      <NavLink key={0} Text="Exchange" href="/exchange" />
      <MobileSubNavDisclosure
        key={7}
        popOverName={"Earn"}
        popOverItems={PopOverItems}
        href="/earn"
      />
      <NavLink key={2} Text="Crowdpooling" href="/crowdpooling" />
      <MobileSubNavDisclosure
        key={8}
        popOverName={"Tools"}
        popOverItems={PopOverItems}
        href="/tools"
      />
      <MobileSubNavDisclosure
        key={9}
        popOverName={"NFT"}
        popOverItems={PopOverItems}
        href="/nft"
      />
      <MobileSubNavDisclosure
        key={10}
        popOverName={"Governance"}
        popOverItems={PopOverItems}
        href="/governance"
      />
      <MobileSubNavDisclosure
        key={11}
        popOverName={"Bridge"}
        popOverItems={PopOverItems}
        href="/bridge"
      />
    </div>
  );
}

function Navigations() {
  return (
    <div className=" lg:flex flex-col md:flex-row space-x-5 relative items-center text-sm">
      <NavLink key={0} Text="Exchange" href="/exchange" />
      <PopOver
        key={7}
        popOverName={"Earn"}
        popOverItems={PopOverItems}
        popOverItemsStyle={[""]}
      />
      <NavLink key={2} Text="Crowdpooling" href="/crowdpooling" />
      <PopOver
        key={8}
        popOverName={"Tools"}
        popOverItems={PopOverItems}
        popOverItemsStyle={[""]}
      />
      <PopOver
        key={9}
        popOverName={"NFT"}
        popOverItems={PopOverItems}
        popOverItemsStyle={[""]}
      />
      <PopOver
        key={10}
        popOverName={"Governance"}
        popOverItems={PopOverItems}
        popOverItemsStyle={[""]}
      />
      <PopOver
        key={11}
        popOverName={"Bridge"}
        popOverItems={PopOverItems}
        popOverItemsStyle={[""]}
      />
    </div>
  );
}

export function NavConnectWallet() {
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

export const NavLink = ({ href, Text }: { href: string; Text: string }) => {
  const route: string = useRouter().pathname;
  return (
    <div
      onClick={() => {

      }}
      className={
        (route === href ? "text-black/900 font-bold" : "text-lightGray/70") +
        " font-medium sm:font-semibold ml-6 text-base lg:text-sm"
      }
    >
      <Link href={href}>{Text}</Link>
    </div>
  );
};

const PopOverItems: PopOverItemType[] = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/dswap_account.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/dswap_account.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/dswap_account.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
];

export type PopOverItemType = {
  name: string;
  description: string;
  href: string;
  icon: React.FC;
};
