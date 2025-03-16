import { useEffect, useState } from "react";
import ProjectCard from "../projects/projectCard";
import useProjects, { ProjectsType } from "@/hooks/useProjects";
import FilterMenu from "./filterMenu";

const Projects = () => {
  const project = useProjects();
  const projectSet: ProjectsType[] = project.projects;
  const [selectedTool, setSelectedTool] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<[]>([]);
  const filterData = (items: any) =>
    items.filter((item: any) => {
      if (selectedTool && selectedTool.length == 0) return true;
      let containAll = true;
      for (const innerItem of selectedTool) {
        if (containAll === false) return false;
        containAll = false;
        checkLoop: for (const i of item.languages) {
          if (i.id == innerItem) {
            containAll = true;
            break checkLoop;
          }
        }
      }
      return containAll;
    });

  useEffect(() => {
    setFilteredData(filterData(projectSet));
  }, [selectedTool]);
  return (
    <div className="mb-[40px] md:mt-0 mt-[15px]">
      <h2 className="text-[25px] font-[500] text-center md:mt-[5px] md:mb-[10px] md:mx-0 my-[10px] mx-0 toBottom">
        Project <span className="text-[--teritary-text]">List</span>
      </h2>
      <FilterMenu onSelectedData={(data) => setSelectedTool(data)} />
      <div
        className={`grid md:grid-cols-[repeat(4,_minmax(0,_1fr))] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-x-[20px] gap-y-[25px] md:mt-[5px] md:mb-[10px] mt-0 mb-[10px] mx-0 toTop`}
      >
        {filteredData.map((item: any, index: number) => (
          <div key={`${index}_${item.title}`}>
            <ProjectCard
              title={item.title}
              languages={item.languages}
              path_id={item.path_id}
              cover_image={item.cover_image}
              company={item.company}
            />
          </div>
        ))}
      </div>
      {filteredData.length == 0 && (
        <p className="py-10 px-0 text-center text-[--primary]">No Projects</p>
      )}
    </div>
  );
};

export default Projects;
