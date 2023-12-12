import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// API LINK : https://pokebuildapi.fr/api/v1/pokemon/limit/151

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      });
  }, []);

  return (
    <div className="main">
      {pokemons.map((pokemon) => (
        <div className="card" key={pokemon.id}>
          <div>
            <h2>{pokemon.name}</h2>
            <img className="img_pokemon"
              src={pokemon.image}
              alt={pokemon.name}
            
            />
      
            <div className="skills">
              <p className="p__skills">SKILLS :</p>
              {pokemon.apiTypes.map((apiType) => (
                <img className="skills__img"
                  src={apiType.image}
                  alt={apiType.img}
                  
                />
              ))}
              </div>
              <div >
                <button className="btn">
                  <Link className="link" to={`/pokemon/${pokemon.id}`}>
                    MORE
                  </Link>
                </button>
                
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
