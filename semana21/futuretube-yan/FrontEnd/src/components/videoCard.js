import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 350,
    maxWidth: 200,
    maxHeight: 350,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VideoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar> // user picture
        }
        title={props.videoTitle}
      />
      <CardMedia
        className={classes.media}

        // titulo do video
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Descrição do vídeo
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete videos">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
