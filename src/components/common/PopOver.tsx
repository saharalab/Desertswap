import { useRouter } from "next/router";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { PopOverItemType } from "@/components/navbar/Utility";
import Link from "next/link";

type PopOverProps = {
  popOverItems: PopOverItemType[];
  popOverItemsStyle: string[];
  popOverName: string;
};

export function PopOver({
  popOverItems,
  popOverItemsStyle,
  popOverName,
}: PopOverProps) {
  const route: string = useRouter().pathname;

  return (
    <div className=" max-w-sm w-full group transition-all duration-1000">
      <div className="dropdown dropdown-hover transition-all  duration-1000">
        <label
          tabIndex={0}
          className="font-semibold flex items-center group-hover:text-black/900 text-lightGray/70 py-4"
        >
          {popOverName}
          <span className="scale-90">
            <DownArrowIcon key={2} />
          </span>
        </label>
        <div
          tabIndex={0}
          className="py-2 w-max space-y-2 overflow-hidden h-0 group-hover:h-max transition-all duration-1000  dropdown-content menu shadow rounded-lg transform -translate-y-2 bg-black/500"
        >
          {popOverItems.map((item: PopOverItemType, index: number) => (
              <Link key={index} href={item.href}>
            <div
              id={item.name}
              className="cursor-pointer hover:bg-lightGray group justify-between w-inherit min-w-max py-2 px-2 text-floralWhite flex items-center"
            >
              <div className="flex">
                <div className="relative min-w-max h-max object-contain max-h-5 mr-3">
                  <item.icon />
                </div>
                <div className=" w-max">
                  <div className="">{item.name}</div>
                  <div className="text-xs text-floralWhite/70 max-w-[22em] lg:min-w-[16em]">
                    {item.description}
                  </div>
                </div>
              </div>
              <div className=" h-8 w-12">
                <ArrowNarrowRightIcon
                  className={`hidden group-hover:flex h-8 w-12  text-floralWhite/60`}
                />
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DownArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="transform translate-y-1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(3.000000, 4.000000)" fill="currentColor">
          <path
            d="M4.41602515,0.624037721 L7.4817666,5.2226499 C7.63494283,5.45241425 7.5728559,5.76284892 7.34309155,5.91602515 C7.26095779,5.97078099 7.16445395,6 7.06574145,6 L0.934258546,6 C0.658116171,6 0.434258546,5.77614237 0.434258546,5.5 C0.434258546,5.40128751 0.46347756,5.30478366 0.518233399,5.2226499 L3.58397485,0.624037721 C3.73715108,0.394273376 4.04758575,0.332186442 4.2773501,0.485362672 C4.33227624,0.521980101 4.37940772,0.569111577 4.41602515,0.624037721 Z"
            transform="translate(4.000000, 3.000000) scale(1, -1) translate(-4.000000, -3.000000) "
          ></path>
        </g>
      </g>
    </svg>
  );
}
