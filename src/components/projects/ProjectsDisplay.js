import React from "react";
import { gql, useQuery } from "@apollo/client";
import Loading from "../Loading";
import ProjectTile from "./ProjectTile";
import WebsiteGrid from "../WebsiteGrid";
import Grid from "@material-ui/core/Grid";

const BLOG_Tile_QUERY = gql`
  query Blog_Tile_Query {
    entries {
      ... on projects_projects_Entry {
        id
        title
        summary
        urlLink
        featureImage {
          url
          title
        }
      }
    }
  }
`;

const mapBlogTiles = (data) =>
  data.entries.map((entry) =>
    entry.title ? (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <ProjectTile key={entry.id} entry={entry} />
      </Grid>
    ) : null
  );

export default function BlogPostDisplay() {
  const { loading, error, data } = useQuery(BLOG_Tile_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const entries = mapBlogTiles(data);

  return (
      <WebsiteGrid>{entries}</WebsiteGrid>
  );
}
