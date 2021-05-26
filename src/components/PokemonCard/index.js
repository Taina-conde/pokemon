import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PokemonImage from "../PokemonImage";

const useStyles = makeStyles({
  root: {
    width: 300,
    display: "flex",
    padding: 15,
    margin: 20,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    textAlign: "center",
  },
});

export default function PokemonCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <PokemonImage id={props.id} name={props.name} view="home" />
      <CardContent className={classes.content}>
        <Typography color="textSecondary" component="h5" variant="h5">
          {props.name}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Type:
        </Typography>
        <Typography variant="body2" component="p">
          {props.types !== undefined &&
            props.types.map((pokemon) => (
              <div key={pokemon.slot}>{pokemon.type.name}</div>
            ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
