import { FC } from "react";
import style from "./about.module.css";
import { useSelector } from "react-redux";

const AboutHead: FC = () => {
  const animationLoaded = useSelector(
    (state: any) => state.siteOptionsStore.animationLoaded
  );
  return (
    <div className="md:mt-[20px] md:mb-[30px] md:mx-0 mt-[10px]">
      <div className="inline-block">
        <p
          className={`${
            animationLoaded ? style.typewriter : style.typewriter1
          }`}
        >
          Hi,
        </p>
      </div>
      <br />
      <div className="inline-block">
        <p
          className={`${
            animationLoaded ? style.typewriter : style.typewriter2
          }`}
        >
          I&apos;m Name Here,
        </p>
      </div>
      <br />
      <div className="inline-block">
        <p
          className={`${
            animationLoaded ? `${style.typewriterEnd}` : style.typewriter3
          }`}
        >
          Full Stack Developer
        </p>
      </div>

      <div
        className={`pt-[20px] pb-[10px] px-0 text-[--secondary-text] fadeIn ${
          animationLoaded ? "" : "load_after_head"
        }`}
      >
        I&apos;m a [Country Here] based full-stack developer and a designer; intent on
        building software solutions with exceptional user experiences.
      </div>
    </div>
  );
};

export default AboutHead;
