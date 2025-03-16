import ProjectCard from "../projects/projectCard";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import useProjects from "@/hooks/useProjects";

const Projects = () => {
  const project = useProjects();
  const topProject = project.getTopProjects();
  const animationLoaded = useSelector(
    (state: any) => state.siteOptionsStore.animationLoaded
  );
  const router = useRouter();
  return (
    <div className="mb-[40px]">
      <h2
        className={`text-center font-[500] text-[25px] toBottom  ${
          animationLoaded ? "" : "load_after_head"
        }
`}
      >
        Top <span className="text-[--teritary-text]">Projects</span>
      </h2>
      <div
        className={`md:grid md:grid-cols-[repeat(4,_minmax(0,_1fr))] md:gap-x-[20px] md:gap-y-[25px] md:mt-[15px] md:mb-[10px] mt-[25px] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] toTop  ${
          animationLoaded ? "" : "load_after_head"
        }
`}
      >
        {topProject!.map((item: any, index: number) => (
          <div
            key={`${index}_${item.title}`}
            className="flex flex-col items-center gap-[3px]"
          >
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
      <center>
        <div
          className={`secondary_btn fadeIn  ${
            animationLoaded ? "" : "load_after_head"
          } mt-[10px]
`}
          onClick={() => router.push("/projects")}
        >
          <span>View all Projects →</span>
        </div>
      </center>
    </div>
  );
};

export default Projects;
