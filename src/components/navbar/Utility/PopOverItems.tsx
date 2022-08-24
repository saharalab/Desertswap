import Image from "next/image";

export const PopOverEarnItems: PopOverItemType[] = [
  {
    name: "Liquidity",
    description: "Provide liquidity to earn trading fees",
    href: "/liquidity",
    icon: () => (
      <Image
        src="/assets/icons/Liquidity.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Mining",
    description: "Stake LP to earn token rewards",
    href: "/mining",
    icon: () => (
      <Image
        src="/assets/icons/Mining.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
];

export const PopOverToolsItems: PopOverItemType[] = [
  {
    name: "Create a token",
    description: "Create your own tokens with one click. No coding required!",
    href: "/erc20",
    icon: () => (
      <Image
        src="/assets/icons/Create token.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Create Crowdpooling",
    description: "Equal opportunity token distribution with community-built pools",
    href: "/cp/list",
    icon: () => (
      <Image
        src="/assets/icons/Create crowd pooling.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
];

export const PopOverNFTItems: PopOverItemType[] = [
  {
    name: "Trade NFT Fragments",
    description: "Explore and Trade NFT Fragments",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/earn.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Fragments",
    description: "Create and Issue Fragments for Your NFTs",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/Fragments.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Create NFT",
    description: "Upload Your Media files and Create NFTs with One Click",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/Create NFT.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
];

export const PopOverGovernanceItems: PopOverItemType[] = [
  {
    name: "DAO",
    description: "DSWAP DAO has been established",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/DAO.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "vDSWAP",
    description: "Mint vDSWAP to get more DSWAP",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/vDSWAP.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Forum",
    description: "Get involved in the DSWAP community",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/Forum.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
  {
    name: "Voting",
    description: "Propose and Vote on DIPs",
    href: "##",
    icon: () => (
      <Image
        src="/assets/icons/voting.png"
        className="object-contain"
        height={32}
        width={32}
        alt="img"
      />
    ),
  },
];

export const PopOverBridgeItems: PopOverItemType[] = [
  {
    name: "Comming Soon!",
    description: "Comming soon...",
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
    name: "Comming Soon!",
    description: "Comming soon...",
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
    name: "Comming Soon!",
    description: "Comming soon...",
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
    name: "Comming Soon!",
    description: "Comming soon...",
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
