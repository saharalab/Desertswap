import { createContext, PropsWithChildren, useState } from "react";

export const ToolTipContext = createContext<any>(null);

export function ToolTipProvider({children}: PropsWithChildren) {
  const [toolTip, setToolTip] = useState<
    { payload: any; active: any; label: any } | any
  >(null);
  return (
    <ToolTipContext.Provider value={{ toolTip, setToolTip }}>
      {children}
    </ToolTipContext.Provider>
  );
}
