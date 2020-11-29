import React from "react";
import { gql, useQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WebsiteGrid from "../WebsiteGrid";
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles({
  blogText: {
    "& img": {
      width: '95%',
     // maxHeight: "40vh",
    },
    overflow: "hidden",
  },
});

const BLOG_POST_QUERY = gql`
  query Blog_Post_Query($id: [QueryArgument]) {
    entry(id: $id) {
      title
      id
      postDate
      dateUpdated @formatDateTime(format: "d/m/y")

      author {
        fullName
      }

      ... on blog_blog_Entry {
        id
        summary

        postContent {
          ... on postContent_text_BlockType {
            text
          }
        }
      }
    }
  }
`;

const getText = (block) => {
  block.map((block) => {
    switch (block.__typename) {
      case "postContent_text_BlockType":
        textDisplay = block.text;
        break;

      default:
        return null;
    }
    return null;
  });
};

let textDisplay = "";

export default function BlogPost(props, { match }) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(BLOG_POST_QUERY, {
    variables: { id: props.match.params.id || 88 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  getText(data.entry.postContent);
  return (
    <WebsiteGrid size={6}>
      <Grid item xs={12}>
        <Typography variant="h3">{data.entry.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Author: {data.entry.author.fullName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Date: {data.entry.dateUpdated}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.blogText} variant="body1">
          {ReactHtmlParser(textDisplay)}
        </Typography>
      </Grid>
    </WebsiteGrid>
  );
}
