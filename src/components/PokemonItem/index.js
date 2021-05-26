import { useEffect } from "react";
import { P } from "../../api";
import { Link } from "react-router-dom";
import { addPokemonStats } from '../../redux/actions';
import { connect } from 'react-redux';
import PokemonCard from "../PokemonCard";

const PokemonItem = (props) => {
  
  const {pokemonName, dispatch, pokemon} = props; 
  useEffect(() => {
    P.getPokemonByName(pokemonName)
      .then((stats) => {
        dispatch(addPokemonStats(pokemonName, stats))
      })
  }, [pokemonName, dispatch]);

  return (
    <li>
      <Link to = {`/pokemon/${pokemonName}`}>
        <PokemonCard name = {pokemonName} id = {pokemon.stats.id} types = {pokemon.stats.types}/>
      </Link>
    </li>
  );
};
function mapStateToProps(pokemons, { pokemonName }) {
  return {
    pokemon: pokemons[pokemonName]
  }
}
export default connect(mapStateToProps)(PokemonItem);
