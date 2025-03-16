import OverlayBox from "@/utils/overlayBox";
import { useDispatch } from "react-redux";
import { projectStoreActions } from "@/store/project";
import MainSlider from "./slider";
import useProjects from "@/hooks/useProjects";
import ReactPlayer from "react-player";

const Project = ({ path_id }: { path_id: string }) => {
  const dipatch = useDispatch();
  const { getProject } = useProjects();
  const selectedProject = getProject(path_id);
  return (
    <div>
      <OverlayBox
        open={true}
        close={() => dipatch(projectStoreActions.setProjectOpen({ open: "" }))}
        title={selectedProject!.title}
      >
        <div className="block max-w-[900px] py-0 px-[10px]">
          {selectedProject!.images && selectedProject!.images.length > 0 && (
            <MainSlider slider={selectedProject!.images} />
          )}
          {selectedProject!.video && (
            <div className="flex justify-center">
              <ReactPlayer
                className="react-player"
                url={selectedProject!.video}
                width="60%"
                height="60%"
                controls={true}
              />
            </div>
          )}
          <div className="text-[16px] font-[300] mt-[15px]">
            <div className="text-left text-[19px] font-[500] my-[5px] mx-0">
              {" "}
              Description
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedProject!.description }}
            ></div>
          </div>
          <div className="mt-[20px]">
            <div className="text-left text-[19px] font-[500] my-[5px] mx-0">
              Tools
            </div>
            <div className="inline-block my-[10px] mx-0">
              {selectedProject!.languages &&
                selectedProject!.languages.map(
                  (item: { name: string; color: string }, index: number) => (
                    <div
                      key={`${index}_${item.name}`}
                      className="text-[color:#000000c2] py-[3px] pr-[12px] pl-[10px] rounded-[12px] text-center text-[length:13px] float-left my-[3px] mr-[3px] ml-0"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.name}
                    </div>
                  )
                )}
            </div>
          </div>
          <div className="my-[10px]">
            <p className="text-white !text-left">
              Company :{" "}
              <span className="text-[--secondary-text]">
                {selectedProject!.company}
              </span>
            </p>
            <p className="text-white !text-left">
              Work Type :{" "}
              <span className="text-[--secondary-text]">
                {selectedProject!.work_type}
              </span>
            </p>
          </div>
        </div>
      </OverlayBox>
    </div>
  );
};

export default Project;
