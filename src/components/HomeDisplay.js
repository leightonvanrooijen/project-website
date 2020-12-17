import React from "react";
import { gql, useQuery } from "@apollo/client";
import ReactHtmlParser from "react-html-parser";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WebsiteGrid from "./WebsiteGrid";
import { makeStyles } from "@material-ui/core/styles";
import Loading from './Loading'
import Ear from "../assets/ear.png";

const useStyles = makeStyles({
  root: {},
  earImage: {
    maxHeight: "14vh",
    marginBottom: "5vh",
  },
});

const HOME_POST_QUERY = gql`
  query HOME_Post_Query {
    entry(id: 5) {
      id
      ... on home_home_Entry {
        id
        title
        homeContent {
          ... on homeContent_homePageContent_BlockType {
            id
            text
            column1
            column2
            text2
          }
        }
      }
    }
  }
`;

const getText = (block) => {
  block.map((block) => {
    switch (block.__typename) {
      case "homeContent_homePageContent_BlockType":
          console.log(block.text1)
        text = block.text;
        text2 = block.text2
        column1 = block.column1
        column2 = block.column2
        break;

      default:
        return null;
    }
    return null;
  });
};

let text = "";
let text2 = "";
let column1 = "";
let column2 = "";
export default function HomeDisplay() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(HOME_POST_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  getText(data.entry.homeContent);
  console.log(data.entry.homeContent);

  return (
    <WebsiteGrid size={6} align={"center"}>
      <Grid item>
        <img className={classes.earImage} alt="ear listening"src={Ear} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{data.entry.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
        {ReactHtmlParser(text)}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
        {ReactHtmlParser(column1)}
        </Typography>
      </Grid>
      <Grid xs={12} lg={6}>
        <Typography variant="body1">
        {ReactHtmlParser(column2)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
        {ReactHtmlParser(text2)}
        </Typography>
      </Grid>
    </WebsiteGrid>
  );
}
