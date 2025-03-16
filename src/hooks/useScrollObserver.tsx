import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const useScrollObserver = (
  menu: { path: string }[],
  ref: React.RefObject<HTMLElement>
) => {
  const [currentHash, setCurrentHash] = useState<string | null>("");
  const currentObserverElement = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (ref && ref.current) {
        const y = ref.current.getBoundingClientRect().bottom;
        if (y - 10 < window.scrollY) {
          ref.current.style.borderBottom = "1px solid rgba(0,0,0,0.2)";
        } else {
          ref.current.style.borderBottom = "none";
        }
      }

      for (const item of menu) {
        if (
          document &&
          item.path.includes("#") &&
          document.getElementById(item.path.split("#")[1])
        ) {
          let element: HTMLElement | null = document.getElementById(
            item.path.split("#")[1]
          );

          if (element) {
            observer.current = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                const target = entry.target as HTMLElement;
                if (entry.intersectionRatio === 1) {
                  if (target && target.id) {
                    setCurrentHash("/#" + target.id);
                    console.log("target current: ", target.id);
                  }
                }
              });
            });

            if (observer.current && currentObserverElement.current) {
              observer.current.unobserve(currentObserverElement.current);
            }
            observer.current.observe(element);
            currentObserverElement.current = element;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      if (observer.current && currentObserverElement.current) {
        observer.current.unobserve(currentObserverElement.current);
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathName == "/") {
      setCurrentHash("/#home");
    } else setCurrentHash(pathName);
    console.log("Pathname current: ", pathName);
  }, [pathName]);

  return currentHash;
};

export default useScrollObserver;
