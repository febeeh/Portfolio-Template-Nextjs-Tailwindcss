import { FC, useState } from "react";
import CircularProgressBar from "../skills/circularProgressBar";
import { useSelector } from "react-redux";

type Tskills = {
  perc: Number;
  title: string;
};

const Skills: FC = () => {
  const animationLoaded = useSelector(
    (state: any) => state.siteOptionsStore.animationLoaded
  );
  const [skillSet] = useState<Tskills[]>([
    {
      title: "Reactjs",
      perc: 95,
    },
    {
      title: "Nextjs",
      perc: 95,
    },
    {
      title: "Vuejs",
      perc: 95,
    },
    {
      title: "HTML",
      perc: 99,
    },
    {
      title: "Nodejs",
      perc: 99,
    },

    {
      title: "MongoDB",
      perc: 95,
    },
    {
      title: "MySQL",
      perc: 95,
    },
    {
      title: "jQuery",
      perc: 80,
    },
    {
      title: "Perl",
      perc: 80,
    },
    {
      title: "PHP",
      perc: 85,
    },
    {
      title: "Photoshop",
      perc: 95,
    },
    {
      title: "Figma",
      perc: 80,
    },
    {
      title: "C++",
      perc: 70,
    },
    {
      title: "Python",
      perc: 70,
    },
    {
      title: "AWS",
      perc: 80,
    },
    {
      title: "CSS",
      perc: 99,
    },
  ]);
  return (
    <div className={`py-[15px]`}>
      <h2
        className={`text-center font-[500] text-[25px] toBottom  ${
          animationLoaded ? "" : "load_after_head"
        }`}
      >
        Professional <span className="text-[--teritary-text]">Skills</span>
      </h2>
      <div
        className={`grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-x-[20px] gap-y-[25px] my-[30px]  toTop  ${
          animationLoaded ? "" : "load_after_head"
        }`}
      >
        {skillSet.map((item: any, index: number) => (
          <div
            key={`${index}_${item.title}`}
            className="flex flex-col items-center gap-[3px]"
          >
            <CircularProgressBar
              percentage={item.perc}
              color="var(--teritary-text)"
              width={100}
              height={100}
              fontSize={20}
              strokeWidth={1.5}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
