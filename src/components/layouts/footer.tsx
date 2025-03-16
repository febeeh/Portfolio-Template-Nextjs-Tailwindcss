import { FC } from "react";
import moment from "moment";

const Footer: FC = () => {
  return (
    <div
      className={`text-[color:--secondary-text] text-center my-0 mx-auto relative h-[100%] px-0 py-[20px] bottom-0`}
    >
      Copyright © {moment().format("YYYY")} Portfolio Template.
    </div>
  );
};

export default Footer;
