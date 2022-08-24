import { Fragment, useState } from "react";
import { Listbox as HeadlessListBox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export function ListBox({ listBoxFilter, ListBoxButton, ListBoxOptions }: any) {
  const [selected, setSelected] = useState<{ name: string } | any>(listBoxFilter[0]);

  return (
    <div className="">
      <HeadlessListBox value={selected} onChange={setSelected}>
        <div className="z-50 relative mt-1 flex justify-end space-y-10">
          <HeadlessListBox.Button>
            <ListBoxButton {...{ selected }} />
          </HeadlessListBox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessListBox.Options className="bg-[#FDEB54] absolute mt-1 max-h-max min-w-max w-full rounded-md border border-black text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {listBoxFilter.map((option: { name: string }, optionIdx: number) => (
                <HeadlessListBox.Option
                  key={optionIdx}
                  className={({ active }: { active: Boolean }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 w-full  ${
                      active ? "bg-white/20" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {
                    ListBoxOptions ? 
                    <ListBoxOptions {...{option}} />
                  : ({ selected }: { selected: Boolean }) => (
                    <>
                      <span className={`block truncate min-w-max w-full`}>
                        {option.name}
                      </span>
                    </>
                  )}
                </HeadlessListBox.Option>
              ))}
            </HeadlessListBox.Options>
          </Transition>
        </div>
      </HeadlessListBox>
    </div>
  );
}
