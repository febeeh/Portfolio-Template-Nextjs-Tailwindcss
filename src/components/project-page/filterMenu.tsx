import useProjects from "@/hooks/useProjects";
import { FC, useEffect, useState } from "react";

const FilterMenu: FC<{ onSelectedData: (data: string[]) => void }> = ({
  onSelectedData,
}) => {
  const project = useProjects();
  const [tool] = useState<any>(project.tools);
  const [selectedTool, setSelectedTool] = useState<string[]>([]);

  useEffect(() => {
    if (selectedTool) onSelectedData(selectedTool);
  }, [selectedTool]);
  return (
    <div className="inline-block mt-[15px] md:mb-[10px] mb-[15px] mx-[10px]">
      <div
        className={`float-left py-[3px] px-[10px] text-[15px] rounded-[10px] m-[5px] cursor-pointer border border-solid border-[rgba(255,255,255,0.5)] ${
          selectedTool && selectedTool.length == 0
            ? "bg-[--primary] text-[#000]"
            : ""
        }`}
        onClick={() => setSelectedTool([])}
      >
        All
      </div>

      {Object.keys(tool).map((item: any, index: number) => (
        <div
          className={`float-left py-[3px] px-[10px] text-[15px] rounded-[10px] m-[5px] cursor-pointer border border-solid border-[rgba(255,255,255,0.5)] ${
            selectedTool &&
            selectedTool.length > 0 &&
            selectedTool.includes(item)
              ? "bg-[--primary] text-[#000]"
              : ""
          }`}
          key={index}
          onClick={() => {
            setSelectedTool((prev) => {
              let newArray = [...prev];
              if (selectedTool.includes(item)) {
                for (const index in newArray) {
                  if (newArray[index] == item) {
                    newArray.splice(Number(index), 1);
                    break;
                  }
                }
              } else {
                newArray.push(item);
              }
              return newArray;
            });
          }}
        >
          {tool[item].name}
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
