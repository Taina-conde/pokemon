import PokemonItem from "../PokemonItem";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
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

const PokemonList = (props) => {
  const classes = useStyles();
  const { pokemons } = props;
  const pokemonNamesArr = Object.keys(pokemons);
  return (
    <ul className = {classes.list}>
      {props.pokemonSearched ? (
        <PokemonItem pokemonName={props.pokemonSearched} />
      ) : (
        pokemonNamesArr.map((pokemon) => {
          console.log('aqui', pokemon);
          return (
            <PokemonItem
              key={pokemon}
              pokemonName={pokemon}
            />
          );
        })
      )}
    </ul>
  );
};
function mapStateToProps(pokemons) {
  return {
    pokemons,
  };
}
export default connect(mapStateToProps)(PokemonList);
