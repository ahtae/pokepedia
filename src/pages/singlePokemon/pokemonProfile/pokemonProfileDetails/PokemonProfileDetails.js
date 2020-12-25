import React from 'react';
import PokemonProfileDetail from './pokemonProfileDetail/PokemonProfileDetail';

const PokemonProfileDetails = ({ pokemon }) => {
  const { maxHP, maxCP, attacks, height, weight, fleeRate } = pokemon;
  const rangeOfHeight = `${height.minimum} - ${height.maximum}`;
  const rangeOfWeight = `${weight.minimum} - ${weight.maximum}`;
  const stringOfAllAttacks = `${attacks.special
    .map((attack) => `${attack.name} (${attack.damage} CP)`)
    .join(', ')}`;

  return (
    <div className="singlePokemonContainer__pokemon__profileContainer__profile">
      <div className="singlePokemonContainer__pokemon__profileContainer__profile__details">
        <PokemonProfileDetail type="Hit Points" information={maxHP} />
        <PokemonProfileDetail type="Combat Power" information={maxCP} />
        <PokemonProfileDetail type="Attacks" information={stringOfAllAttacks} />
        <PokemonProfileDetail type="Height" information={rangeOfHeight} />
        <PokemonProfileDetail type="Weight" information={rangeOfWeight} />
        <PokemonProfileDetail type="Flee Rate" information={fleeRate} />
      </div>
    </div>
  );
};

export default PokemonProfileDetails;
