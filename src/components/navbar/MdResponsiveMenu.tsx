
import {
  MenuAlt3Icon,
  XIcon,
} from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SmNavigations } from "./smNav";

export function MdResponsiveMenu({ isOpen, setIsOpen }: any) {
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
                  <Dialog.Panel className="bg-supernova w-full transform overflow-x-hidden fixed bottom-0 top-0 pb-10 overflow-y-visible scroll-smooth">
                    <div className="h-full w-full ml-10">
                      <SmNavigations />
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