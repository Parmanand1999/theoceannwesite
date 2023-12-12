import { useState, useEffect } from "react";

function useIsMobile() {
  const minDesktopWidth = 1080;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > minDesktopWidth ? false : true
  );

  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth >= minDesktopWidth ? false : true);
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}

export default useIsMobile;
