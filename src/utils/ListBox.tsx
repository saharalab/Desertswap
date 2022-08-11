import { Fragment, useState } from "react";
import { Listbox as HeadlessListBox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people: { name: string }[] = [
  { name: "Sort by APR" },
  { name: "Available Balance" },
  { name: "Sort by value locked" },
];

export function ListBox() {
  const [selected, setSelected] = useState<{ name: string } | any>(people[0]);

  return (
    <div className="">
      <HeadlessListBox value={selected} onChange={setSelected}>
        <div className="relative mt-1 flex justify-end space-y-10">
          <HeadlessListBox.Button className="relative w-full cursor-default rounded-lg border border-black py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-xs">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-black/900"
                aria-hidden="true"
              />
            </span>
          </HeadlessListBox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessListBox.Options className="bg-[#FDEB54] absolute mt-1 max-h-max min-w-max w-full rounded-md border border-black text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {people.map((person: { name: string }, personIdx: number) => (
                <HeadlessListBox.Option
                  key={personIdx}
                  className={({ active }: { active: Boolean }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 w-full  ${
                      active ? "bg-white/20" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }: { selected: Boolean }) => (
                    <>
                      <span
                        className={`block truncate min-w-max w-full`}
                      >
                        {person.name}
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
