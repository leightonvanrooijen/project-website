import React from "react";
import HeaderPhoto from "../appbar/HeaderPhoto";
import ProjectsDisplay from "./ProjectsDisplay";

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <HeaderPhoto start={"I built a"} punch={["calculator", "website", "drum machine", "timer"]}/>
      <ProjectsDisplay />
    </React.Fragment>
  );
}
