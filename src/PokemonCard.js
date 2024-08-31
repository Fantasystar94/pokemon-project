import { getTypeIconSrc } from "./utils"
import PokemonType from './PokemonType'
export default function PokemonCard({item}){
    const {paddedId,name,types,imgSrc}=item
    return(
          <div className={`pokemon-card ${item.types[0].name}`}>
            <div>
            <span className={`id-number`}>{`#${paddedId}`}</span>
            <span className="pokemon-name">{name}</span>
            

                  <PokemonType types={types}/>
     
            </div>
            <img className="pokemon-image" src={imgSrc}/>
          </div>
    )
}