import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo, PopOver } from "../utils";
import { CgMenuGridO } from "react-icons/cg"

export const Navbar = () => {
  return (
    <div className="flex justify-center h-max min-w-full border-solid border-b-black/900 border-b-2">
      <div className=" lg:container w-full flex justify-between items-center ">
        <div className="flex min-w-max space-x-5">
          <Logo />
          {/* Navigations */}
          <LeftNavArea />
        </div>
        {/* Wallet Connect */}
        <RightNavArea />
      </div>
    </div>
  );
};

function RightNavArea() {
  return (
    <div className="flex items-center h-full">
      <div className="flex items-center space-x-3 ">
        <button className="flex items-center">
          <Image
            src="/assets/icons/dswap_home_icon.png"
            className=" object-contain"
            height={35}
            width={35}
            alt="dswap_home_icon"
          />
        </button>
        <button className="flex items-center">
          <Image
            src="/assets/icons/dswap_account.png"
            className="object-contain"
            height={35}
            width={35}
            alt="dswap_home_icon"
          />
        </button>
      </div>
      <div className=" space-x-2 flex items-center ml-7 mr-4 bg-black/500  rounded-full">
        {/* Bright Dot Icon */}
        <div className="ml-4 my-2 rounded-full bg-white/40 h-2 w-2 flex justify-center items-center">
          <div className="rounded-full bg-white/90 h-1 w-1"></div>
        </div>
        {/* Network Name */}
        <div className="translate-x-1 text-xs items-center space-x-2 flex min-w-max text-white transform -translate-y-[2px]">
          <div className="font-bold translate-y-[1px] -translate-x-1">POP</div>
          <button className="group translate-y-[2px] px-5 pb-2 pt-2 rounded-full border-solid border border-white bg-black/500 hover:bg-black/900">
            <div className="font-black tracking-wide transform -translate-y-[1px] w-full h-full text-darkSupernova">
              Connect to a wallet
            </div>
          </button>
        </div>
      </div>
      <div className="min-w-max min-h-max">
        <CgMenuGridO className="text-black text-2xl object-contain" />
      </div>
    </div>
  );
}

function LeftNavArea() {
  return (
    <div className="flex space-x-5 relative items-center text-base">
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

export const NavLink = ({ href, Text }: { href: string; Text: string }) => {
  const route: string = useRouter().pathname;
  return (
    <div
      className={
        (route === href ? "text-black/900 font-bold" : "text-black/60") +
        " font-medium"
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

