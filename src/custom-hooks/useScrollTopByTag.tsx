import { useEffect, useState } from "react";

// Hook
export function useScrollTopByTag(tagName: string) {
  const [scrollTop, setScrollTop] = useState<number | any>(0);

  useEffect(() => {
    let handleResize: any;
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      handleResize = () => {
        // Set window width/height to state
        setScrollTop(document?.querySelector(tagName)?.scrollTop);
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return scrollTop;
}
