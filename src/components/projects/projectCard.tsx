import Image from "next/image";
import { useDispatch } from "react-redux";
import { projectStoreActions } from "@/store/project";

const ProjectCard = ({
  title,
  languages,
  path_id,
  cover_image,
  company,
}: {
  title: string;
  languages: { name: string; color: string }[];
  path_id: string;
  cover_image: any;
  company: string;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="project_section">
      <div className="cursor-pointer rounded-[10px] p-[10px]">
        <div
          onClick={() =>
            dispatch(projectStoreActions.setProjectOpen({ open: path_id }))
          }
        >
          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={cover_image}
              alt="project"
              fill
              className="object-cover !relative"
            />
          </div>

          {/* Title and Company */}
          <div className="text-center text-[20px]">{title}</div>
          <div className="text-center text-[13px] text-[--secondary-text] mt-[3px]">
            {company}
          </div>

          {/* Languages Section */}
          <div className="w-full flex justify-center min-h-[108px]">
            <div className="inline-block my-[10px]">
              {languages &&
                languages.map(
                  (item: { name: string; color: string }, index: number) => (
                    <div
                      key={`${index}_${item.name}`}
                      className="text-[12px] text-[#000000c2] px-[10px] py-[3px] rounded-[12px] text-center float-left m-[3px_3px_3px_0]"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.name}
                    </div>
                  )
                )}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <center>
          <div
            className="secondary_btn mt-[5px] mb-[10px] mx-auto text-[14px]"
            onClick={() =>
              dispatch(projectStoreActions.setProjectOpen({ open: path_id }))
            }
          >
            <span>Read More</span>
          </div>
        </center>
      </div>
    </div>
  );
};

export default ProjectCard;
