import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.ImgUrl}
          title={props.CardTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.CardContent}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Total Units: {props.UnitNum}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={props.ButtonRoute1}>
          <Button size="small" color="primary">
            {props.Button1Text}
          </Button>
        </Link>
        <Link to={props.ButtonRoute2}>
          <Button size="small" color="primary">
            {props.Button2Text}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
