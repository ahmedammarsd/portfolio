import { useEffect, useState } from "react";

const useScrollYSizeHook = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScrollY = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollY);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return scrollY;
};

export default useScrollYSizeHook;
