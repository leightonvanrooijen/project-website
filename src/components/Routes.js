import React from "react";
import { Switch, Route } from "react-router";

import HomePage from "./HomePage";
import BlogPostPage from "./blog/BlogPostPage";
import ProjectsPage from "./projects/ProjectsPage";
import BlogPost from "./blog/BlogPost";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/blog" exact component={BlogPostPage} />
      <Route path="/blog/:id" exact component={BlogPost} />
      <Route path="/projects" component={ProjectsPage} />
    </Switch>
  );
}

export default Routes;