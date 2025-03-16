"use client";

import React, { useState, useEffect, FC, ReactNode } from "react";
import style from "./overlayBox.module.css";

type propsType = {
  open: boolean;
  title: string;
  close: (value: boolean) => void;
  customMainClass?: string;
  disableOverlayClose?: string;
  customBodyClass?: string;
  customClass?: string;
  footer?: string;
  children: ReactNode;
};
const OverlayBox: FC<propsType> = (props) => {
  const [open, setOpen] = useState(false);
  const [header] = useState(true);
  const [blur] = useState(true);
  useEffect(() => {
    setOpen(props.open);
    if (props.open === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.open]);
  const onClickClose = () => {
    setOpen((prev) => !prev);
    if (props.close) props.close(false);
  };

  return (
    <React.Fragment>
      {open && (
        <React.Fragment>
          {/* Overlay Main */}
          <div
            className={`fixed md:p-0 md:pt-[60px] md:pb-[40px] p-0 w-full h-[100vh] md:max-h-[100vh] max-h-[80vh] z-10 grid md:justify-center justify-[unset] md:bottom-auto bottom-0 items-center md:top-0 top-auto left-0 ${
              props.customMainClass ? props.customMainClass : ""
            }`}
          >
            {/* Overlay Blur */}
            {blur && (
              <div
                className="fixed w-full h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-sm top-0 left-0 z-5"
                onClick={() =>
                  props.disableOverlayClose ? "" : onClickClose()
                }
              />
            )}

            {/* Overlay Box */}
            <div
              className={`block relative bg-[--primary-bg] shadow-[0_0_7px_-1px_rgba(0,0,0,0.19)] rounded-[10px] text-[--overlay-box-text] z-3 mb-[40px] w-[100%] h-[100%] min-w-[100%]  ${
                props.customClass ? props.customClass : ""
              } fadeIn`}
            >
              {/* Overlay Content */}
              <div className="overlay_content">
                {/* Overlay Header */}
                <div
                  className={`flex px-4 ${
                    header ? "justify-between" : "justify-end"
                  } items-center ${
                    header ? "py-[15px]" : "py-[10px] absolute w-full"
                  } border-b-[0.5px] border-[--overlay-box-lines]`}
                >
                  {header && (
                    <h6 className="m-0 text-[20px] font-normal">
                      {props.title}
                    </h6>
                  )}
                  {/* Close Button */}
                  <div
                    className={`w-[23px] h-[23px] flex justify-center items-center text-[9px] text-transparent cursor-pointer border border-white rounded-full z-10 ${style.close}`}
                    onClick={onClickClose}
                  >
                    <p className="relative -top-0.4">&#10006;</p>
                  </div>
                </div>

                {/* Overlay Body */}
                <div
                  className={`w-full h-full pt-[5px] md:pb-[10px] pb-[50px] px-4 overflow-auto max-h-[75vh] ${
                    props.customBodyClass ? props.customBodyClass : ""
                  }`}
                >
                  {props.children}
                </div>

                {/* Overlay Footer */}
                {props.footer && (
                  <div className="flow-root py-[8px] px-3 border-t-[0.5px] border-overlay-box-lines">
                    {props.footer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default OverlayBox;
