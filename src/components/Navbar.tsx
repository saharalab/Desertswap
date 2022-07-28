import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo, PopOver } from "../utils";
import { CgMenuGridO } from "react-icons/cg";

export const Navbar = () => {
  return (
    <div className="bg-supernova flex justify-center h-max min-w-full border-solid border-b-black/900 border-b-[1px]">
      <div className="px-3 md:px-10 2xl:container w-full flex justify-between items-center ">
        <div className="flex justify-between xl:justify-start w-full min-w-max space-x-5">
          <Logo />
          {/* Navigations */}
          <Navigations />
        </div>
        {/* Wallet Connect */}
        <div className="hidden xl:flex h-full">
          <NavConnectWallet />
        </div>
      </div>
    </div>
  );
};

export function NavConnectWallet() {
  return (
    <div className="fixed xl:relative bottom-0 right-0">
      <div className="justify-between py-2 px-2 md:px-8 xl:pl-16 xl:pr-2 xl:py-0 bottom-0 right-2 xl:w-auto flex items-center xl:h-full">
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
      <div className=" space-x-2 flex items-center  md:ml-7  mr-4 bg-black/500  rounded-full">
        {/* Bright Dot Icon */}
        <div className="ml-4 my-2 rounded-full bg-white/40 h-2 w-2 flex justify-center items-center">
          <div className="rounded-full bg-white/90 h-1 w-1"></div>
        </div>
        {/* Network Name */}
        <div className="translate-x-1 text-[0.5rem] md:text-xs items-center space-x-2 flex min-w-max text-white transform -translate-y-[2px]">
          <div className="font-bold translate-y-[1px] -translate-x-1">POP</div>
          <button className="group translate-y-[2px] px-5 pb-2 pt-2 rounded-full border-solid border-[2px] border-paleGrey bg-gray-900">
            <div className=" font-semibold tracking-wide transform -translate-y-[1px] w-full h-full text-supernova">
              Connect to a wallet
            </div>
          </button>
        </div>
      </div>
      <div className="min-w-max min-h-max">
        <CgMenuGridO className="text-black text-2xl object-contain" />
      </div>
    </div>
    </div>
  );
}

function Navigations() {
  return (
    <div className="hidden lg:flex flex-col md:flex-row space-x-5 relative items-center text-sm">
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
