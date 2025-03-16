import { useCallback } from "react";

const useScrollToTop = () => {
  const scrolltotop = useCallback(() => {
    if (
      document &&
      document.getElementById(window.location.hash.split("#")[1])
    ) {
      let element: any = document.getElementById(
        window.location.hash.split("#")[1]
      );
      const yOffset = -200;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname
      );
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return { scrolltotop };
};

export default useScrollToTop;
