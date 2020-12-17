import React from "react";
import HeaderPhoto from "../appbar/HeaderPhoto";
import BlogPostDisplay from "./BlogPostDisplay";

export default function BlogPostPage() {
  return (
    <React.Fragment>
      <HeaderPhoto start={"Keep yourself"} punch={["up to date", "well informed", "super educated"]}/>
      <BlogPostDisplay />
    </React.Fragment>
  );
}
