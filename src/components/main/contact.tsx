import { FC, useState } from "react";

import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

type Tcontacts = {
  icon: any;
  title: string;
  path: string;
};

const Contact: FC = () => {
  const animationLoaded = useSelector(
    (state: any) => state.siteOptionsStore.animationLoaded
  );
  const [contactList] = useState<Tcontacts[]>([
    {
      title: "LinkedIn",
      icon: <LinkedIn />,
      path: "#",
    },
    {
      title: "GitHub",
      icon: <GitHub />,
      path: "#",
    },
    {
      title: "Email",
      icon: <Email />,
      path: "#",
    },
    {
      title: "Instagram",
      icon: <Instagram />,
      path: "#",
    },
    {
      title: "Facebook",
      icon: <Facebook />,
      path: "#",
    },
    {
      title: "Whatsapp",
      icon: <WhatsApp />,
      path: "#",
    },
  ]);
  return (
    <div className="pt-[13px]">
      <h2
        className={`toBottom  ${
          animationLoaded ? "" : "load_after_head"
        } text-center text-[25px] font-[500] mb-[5px]`}
      >
        Contact <span>Me</span>
      </h2>
      <p
        className={`fadeIn  ${
          animationLoaded ? "" : "load_after_head"
        } text-center`}
      >
        Get in touch with me via social media, email or phone.
      </p>
      <div
        className={`md:flex md:justify-center md:items-center md:gap-x-[60px] md:gap-y-[20px] toTop ${
          animationLoaded ? "" : "load_after_head"
        } 
   grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-x-[20px] gap-y-[20px] my-[30px]`}
      >
        {contactList.map((item: any, index: number) => (
          <a href={item.path} key={`${index}_${item.title}`} target="_blank">
            <div className="group flex flex-col items-center gap-[3px] cursor-pointer">
              <span className="text-[--secondary-text] group-hover:text-[--primary-text]">
                {item.icon}
              </span>
              <p className="text-[--secondary-text] group-hover:text-[--primary-text]">
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
