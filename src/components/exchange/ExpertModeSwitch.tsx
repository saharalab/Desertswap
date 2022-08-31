import { useState } from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";

export function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-green-600 shadow-lg" : "bg-white/10"}
          relative inline-flex h-[1.56rem] w-[3.3rem] scale-125   shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Expert Mode</span>
      <span
        aria-hidden="true"
        className={`${enabled ? " translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[1.3rem]  w-[1.3rem] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </HeadlessSwitch>
  );
}