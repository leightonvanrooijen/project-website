import React from "react";
import HeaderPhoto from "../appbar/HeaderPhoto";
import ProjectsDisplay from "./ProjectsDisplay";

export default function ProjectsPage() {
  return (
    <React.Fragment>
      <HeaderPhoto />
      <ProjectsDisplay />
    </React.Fragment>
  );
}
