import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.scss';

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemonsContainer__pokemonContainer">
      <div className="pokemonsContainer__pokemonContainer__pokemon">
        <Link
          to={`/pokemons/${pokemon.id}`}
          className="pokemonsContainer__pokemonContainer__pokemon--removeUnderline"
        >
          <div className="pokemonsContainer__pokemonContainer__pokemon__imageContainer">
            <img
              className="pokemonsContainer__pokemonContainer__pokemon__imageContainer__image"
              src={pokemon.image}
              alt={pokemon.name}
            />
          </div>
          <div className="pokemonsContainer__pokemonContainer__pokemon__nameContainer">
            <p className="pokemonsContainer__pokemonContainer__pokemon__nameContainer__name">
              {pokemon.name}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pokemon;
