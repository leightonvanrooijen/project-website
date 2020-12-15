import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import AppBarProject from "./appbar/AppBarProject";
import HomePage from "./HomePage";
import BlogPostPage from "./blog/BlogPostPage";
import ProjectsPage from "./projects/ProjectsPage";
import BlogPost from "./blog/BlogPost";
import Contact from "./Contact";


export default function App() {

  return (
    <div>
      <AppBarProject />
      
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogPostPage} />
        <Route path="/blog/:id" exact component={BlogPost} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

// export default App;
