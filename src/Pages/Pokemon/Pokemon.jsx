import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

  // on affiche le nom du pokemon via L'api grace à son id
  function Pokemon() {
    const {pokemonId} = useParams()
    const [pokemon, setPokemon] = useState({
      stats: {},
      apiTypes: [],
    })
    useEffect(() => {
      fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data)
        })

        }, [])
     

  
  return (
    <div className="App">
    
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
<h2>Stats</h2>
<ul>
  <li>Health points : {pokemon.stats.HP} </li>
  <li>Attack : {pokemon.stats.attack} </li>
  <li>Defense : {pokemon.stats.defense} </li>
  <li>Speed : {pokemon.stats.speed} </li> 
</ul>
{pokemon.apiTypes.map((type) => (
        <img key={type.name} src={type.image} alt={type.name} />
      ))}
      <h3>Géneration numéro : {pokemon.apiGeneration}</h3>
    </div>
  );
}

export default Pokemon;
