import { makeStyles } from "@material-ui/core/styles";
const imagesBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'

const useStyles = makeStyles({
    home: {
      width: 100,
    },
    details: {
        width: 300,
    }
    
  
  });

const PokemonImage = (props) => {
    const classes = useStyles();
    
    return (
        
         <img
                src = {`${imagesBaseUrl}/${props.id}.svg`}
                alt = {props.name}
                className = {props.view === "home" ? classes.home : classes.details}
            />
            
        
    )
}
export default PokemonImage;