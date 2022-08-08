import Image from "next/image";

export const PopOverItems: PopOverItemType[] = [
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
