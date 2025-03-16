"use client";
import AboutHead from "@/components/main/about";
import Contact from "@/components/main/contact";
import Skills from "@/components/main/skills";
import Projects from "@/components/main/projects";
export default function Home() {
  return (
    <div>
      <div id="home">
        <AboutHead />
      </div>
      <div>
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
