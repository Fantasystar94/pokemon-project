import { pokemons } from './pokemon';
import PokemonCard from './PokemonCard'
export default function PokemonsContainer(){

    return (
        <div className="Wrapper">
          <div className="pokemons-container">
            {pokemons.map((item,index)=>(
                <PokemonCard key={index} item={item}/>
            ))}
          </div>
        </div>
      );

}