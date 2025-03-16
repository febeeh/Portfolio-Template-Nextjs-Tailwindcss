"use client";
import { FC, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Menu, MenuOpen } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { siteOptionsStoreActions } from "@/store/siteOptions";
import Link from "next/link";
import useScrollToTop from "@/hooks/useScrollToTop";
import useScrollObserver from "@/hooks/useScrollObserver";

const Header: FC = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const animationLoaded = useSelector(
    (state: any) => state.siteOptionsStore.animationLoaded
  );
  const { scrolltotop } = useScrollToTop();
  const ref: any = useRef();
  const [menu] = useState<{ title: string; path: string }[]>([
    {
      title: "Home",
      path: "/#home",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/#contact",
    },
  ]);
  const currentHash = useScrollObserver(menu, ref);

  useEffect(() => {
    setTimeout(() => {
      scrolltotop();
    }, 1);
    console.log("pathname");
  }, [pathName]);

  useEffect(() => {
    // Setting animation loaded
    if (animationLoaded === false) {
      setTimeout(() => {
        dispatch(
          siteOptionsStoreActions.setAnimationLoaded({ animationLoaded: true })
        );
      }, 4500);
    }
  }, []);

  return (
    <div
      className="sticky top-0 z-10 bg-[--primary-bg] flex justify-between items-center py-5 px-4 md:px-0"
      ref={ref}
    >
      <div className="flex items-center">
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <MenuOpen /> : <Menu />}
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-x-2 cursor-pointer absolute md:relative top-16 md:top-auto left-4 md:left-auto bg-[--primary-bg] md:bg-transparent shadow md:shadow-none p-2 md:p-0 rounded md:rounded-none`}
        >
          {menu.map((item: { title: string; path: string }, index: number) =>
            item.path.includes("#") &&
            pathName == item.path.split("#")[0] &&
            pathName == "/" ? (
              <li
                key={index}
                className={`pt-[8px] pb-[9px] px-[10px] leading-[1.1] rounded-[10px] ${
                  currentHash!.includes(item.path)
                    ? " bg-[--background-box]"
                    : ""
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  if (
                    document &&
                    document.getElementById(
                      item.path ? item.path.split("#")[1] : ""
                    )
                  ) {
                    let element: any = document.getElementById(
                      item.path ? item.path.split("#")[1] : ""
                    );
                    const yOffset = -100;
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                <a> {item.title} </a>
              </li>
            ) : (
              <li
                key={index}
                className={`pt-[8px] pb-[9px] px-[10px] leading-[1.2] rounded-[10px] ${
                  currentHash!.includes(item.path)
                    ? "bg-[--background-box]"
                    : ""
                }`}
              >
                <Link href={item.path} onClick={() => setMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <a
          className={`secondary_btn text-[length:14px] font-[500]`}
          href="#"
          download
        >
          <span>
            <Download className="text-[22px]" /> Download CV
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
