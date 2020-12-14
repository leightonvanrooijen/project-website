import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useAnalytics } from "use-analytics";

import AppBarProject from "./appbar/AppBarProject";
import HeaderPhoto from "./appbar/HeaderPhoto";
import Home from "./Home";
import BlogPostDisplay from "./blog/BlogPostDisplay";
import ProjectsDisplay from "./projects/ProjectsDisplay";
import BlogPost from "./blog/BlogPost";
import Contact from "./Contact";


export default function App() {

  return (
    <div>
      <AppBarProject />
      <HeaderPhoto />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={BlogPostDisplay} />
        <Route path="/blog/:id" exact component={BlogPost} />
        <Route path="/projects" component={ProjectsDisplay} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

// export default App;
