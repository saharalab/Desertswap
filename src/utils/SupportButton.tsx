import React from "react";
import { BsQuestionCircle } from "react-icons/bs"

export function SupportButton() {
  return (
    <div className="text-xs lg:text-base scale-90 text-paleGrey/80 flex items-center font-medium fixed bottom-10 xl:bottom-0 right-0 px-4 py-2 lg:py-3 lg:px-6 rounded-full bg-gray-800 m-2">
      <BsQuestionCircle className="text-2xl mr-2 object-contain scale-90" />
      <div className="-translate-y-[1px]">Support</div>
    </div>
  );
}
