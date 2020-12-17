import React from "react";
import { gql, useQuery } from "@apollo/client";
import WebsiteGrid from '../WebsiteGrid'
import Loading from '../Loading'
import Grid from "@material-ui/core/Grid";
import BlogTile from "./BlogTile";

const BLOG_Tile_QUERY = gql`
query Blog_Tile_Query {
  entries {
    ... on blog_blog_Entry {
      id
      title
      summary
      slug
      featureImage {
        url
        title
      }
    }
  }
}
`;

const mapBlogTiles = (data) =>
  data.entries.map((entry) => (
    entry.title ? 
    <Grid item xs={12} md={10} lg={7}>
      <BlogTile id={entry.id} key={entry.id} entry={entry} />
    </Grid>
    : null
  ));

  
export default function BlogPostDisplay() {

  const { loading, error, data } = useQuery(BLOG_Tile_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const entries = mapBlogTiles(data);
  
  return (
      <WebsiteGrid align={'center'}>{entries}</WebsiteGrid>
  );
}
