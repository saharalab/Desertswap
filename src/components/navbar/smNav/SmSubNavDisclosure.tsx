import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import { MdArrowDropDown } from "react-icons/md";
import { PopOverItemType } from "../Utility";

export function SmSubNavDisclosure({ popOverItems, popOverName, href }: any) {
    const route: string = useRouter().pathname;
  
    return (
      <Disclosure
        as="div"
        className="mt-2 w-full flex flex-col items-start text-base"
      >
        {({ open }: { open: Boolean }) => (
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
                <a
                  href={item.href}
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
                </a>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }