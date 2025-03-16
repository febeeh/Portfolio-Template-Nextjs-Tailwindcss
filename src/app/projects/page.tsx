"use client";
import Projects from "@/components/project-page/projects";
import { siteOptionsStoreActions } from "@/store/siteOptions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProjectsMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      siteOptionsStoreActions.setAnimationLoaded({ animationLoaded: true })
    );
  }, []);
  return (
    <div>
      <Projects />
    </div>
  );
};

export default ProjectsMain;
