import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import images from "../data.json";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto"
  },
  titleStyle: {
    color: "rgb(0, 188, 212)"
  }
};

const ImageGridList = () => (
  <div style={styles.root}>
    <MuiThemeProvider>
      <GridList style={styles.gridList} cols={2.2}>
        {images.art.map(art => (
          <GridTile
            key={art.poster}
            title={art.title}
            actionIcon={
              <IconButton>
                <StarBorder color="rgb(0, 188, 212)" />
              </IconButton>
            }
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={art.poster} />
          </GridTile>
        ))}
      </GridList>
    </MuiThemeProvider>
  </div>
);

export default ImageGridList;
