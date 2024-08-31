import { getTypeIconSrc } from "./utils"

export default function PokemonType({types}){
    const type = types;
    return (
        <div className="types">
            {
            type.map((item,index)=>(
                <div key={index} className={item.name}>
                <img src={getTypeIconSrc(item.name)}/>
                <span>{item.name}</span>
                </div>

                ))
            }
        </div>
    )

}


