import React from "react";
import { gql, useQuery } from "@apollo/client";
import WebsiteGrid from '../WebsiteGrid'
import Loading from '../Loading'
import Grid from "@material-ui/core/Grid";
import BlogTile from "./BlogTile";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    marginTop: '10vh',
    
  },
  container: {
    justifyContent: 'center',
  },
  loading: {
    display: 'flex',
    height: '60vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const BLOG_Tile_QUERY = gql`
query Blog_Tile_Query {
  entries {
    ... on blog_blog_Entry {
      id
      title
      summary
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
      <BlogTile key={entry.id} entry={entry} />
    </Grid>
    : null
  ));

  
export default function BlogPostDisplay() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(BLOG_Tile_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  const entries = mapBlogTiles(data);

  return (

      <WebsiteGrid align={'center'}>{entries}</WebsiteGrid>
  );
}
