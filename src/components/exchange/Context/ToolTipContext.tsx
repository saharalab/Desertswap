import { createContext, PropsWithChildren, useState } from "react";

export const ToolTipContext = createContext<any>("");

export function ToolTipProvider({children}: PropsWithChildren) {
  const [bsudValue, setBsudValue] = useState<string>("");
  return (
    <ToolTipContext.Provider value={{ bsudValue, setBsudValue }}>
      {children}
    </ToolTipContext.Provider>
  );
}
