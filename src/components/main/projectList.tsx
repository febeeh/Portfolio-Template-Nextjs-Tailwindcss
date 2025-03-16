"use client";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectStoreActions } from "@/store/project";
import { usePathname, useRouter } from "next/navigation";
import Project from "../projects/project";

const ProjectList: FC = () => {
  const dispatch = useDispatch();
  const projectOpen = useSelector(
    (state: any) => state.projectStore.projectOpen
  );
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const pOpen = params.get("project");
    if (pOpen) {
      dispatch(projectStoreActions.setProjectOpen({ open: pOpen }));
      router.replace(pathName.split("?")[0], undefined);
    }
  }, []);
  return <div>{projectOpen && <Project path_id={`${projectOpen}`} />}</div>;
};

export default ProjectList;
