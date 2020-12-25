import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const PokemonEvolution = ({ evolution }) => {
  const { name, id, image } = evolution;

  return (
    <div
      key={name}
      className="singlePokemonContainer__pokemon__evolutionsContainer__evolutions__evolution"
    >
      <Link
        to={`/pokemons/${id}`}
        className="singlePokemonContainer__pokemon__evolutionsContainer__evolutions__evolution--removeUnderline"
      >
        <Image
          src={image}
          alt={name}
          className="singlePokemonContainer__pokemon__evolutionsContainer__evolutions__evolution__image"
        />
        <p className="singlePokemonContainer__pokemon__evolutionsContainer__evolutions__evolution__name">
          {name}
        </p>
      </Link>
    </div>
  );
};

export default PokemonEvolution;
