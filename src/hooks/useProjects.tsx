import { useCallback, useState } from "react";

export type ProjectsType = {
  title: string;
  description: string;
  images: { image: string }[];
  path_id: string;
  cover_image: string;
  languages: ToolType[];
  company: string;
  work_type: string;
  top?: boolean;
  video?: string;
};

export type ToolType = {
  name: string;
  color: string;
  id: string;
};

const useProjects = () => {
  // Initializing Tools
  const tools: Record<string, ToolType> = {
    nextjs: { name: "Next.js", color: "#fb7185", id: "nextjs" },
    reactjs: { name: "React.js", color: "#fb71d2", id: "reactjs" },
    vuejs: { name: "Vue.js", color: "#d671fb", id: "vuejs" },
    nodejs: { name: "Node.js", color: "#8471fb", id: "nodejs" },
    html: { name: "HTML", color: "#718efb", id: "html" },
    mongodb: { name: "MongoDB", color: "#71c5fb", id: "mongodb" },
    mysql: { name: "MySQL", color: "#71fbe9", id: "mysql" },
    jquery: { name: "jQuery", color: "#71fbb5", id: "jquery" },
    ajax: { name: "AJAX", color: "#71fb7b", id: "ajax" },
    php: { name: "PHP", color: "#b5fb71", id: "php" },
    photoshop: { name: "Photoshop", color: "#e6fb71", id: "photoshop" },
    figma: { name: "Figma", color: "#fbe671", id: "figma" },
    tailwind: { name: "Tailwind", color: "#71c5fb", id: "tailwind" },
    aws: { name: "AWS", color: "#e8c3ba", id: "aws" },
    cpanel: { name: "cPanel", color: "#f28a5c", id: "cpanel" },
    unity: { name: "Unity 3D", color: "#f28a5c", id: "unity" },
    css: { name: "CSS", color: "#bae8bb", id: "css" },
    blender: { name: "Blender", color: "#bae8bb", id: "blender" },
  };

  // Initializing Projects
  const [projects] = useState<ProjectsType[]>([
    {
      title: "Portfolio Template",
      description:
        "A portfolio application to showcase you're projects and skills.",
      images: [
        {
          image:
            process.env.NEXT_PUBLIC_FILE_PATH +
            "/images/projects/portfolio/portfolio1.png",
        },
        {
          image:
            process.env.NEXT_PUBLIC_FILE_PATH +
            "/images/projects/portfolio/portfolio2.png",
        },
        {
          image:
            process.env.NEXT_PUBLIC_FILE_PATH +
            "/images/projects/portfolio/portfolio3.png",
        },
        {
          image:
            process.env.NEXT_PUBLIC_FILE_PATH +
            "/images/projects/portfolio/portfolio4.png",
        },
      ],
      path_id: "portfolio",
      cover_image: "/images/projects/portfolio.png",
      languages: [
        tools["nextjs"],
        tools["reactjs"],
        tools["html"],
        tools["css"],
        tools["tailwind"],
        tools["cpanel"],
        tools["photoshop"],
      ],
      company: "None",
      work_type: "None",
      top: true,
    },
  ]);

  const getProject = useCallback(
    (path_id: string): ProjectsType | undefined => {
      return projects.find((item: ProjectsType) => item.path_id === path_id);
    },
    []
  );

  const getTopProjects = useCallback((): ProjectsType[] | undefined => {
    return projects.filter((item: ProjectsType) => item.top === true);
  }, []);

  return { getProject, getTopProjects, tools, projects };
};

export default useProjects;
