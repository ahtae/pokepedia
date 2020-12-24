import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import PokemonType from './pokemonType/PokemonType';

const PokemonTypes = ({ types }) => {
  const allTypes = types.map((type) => <PokemonType type={type} />);

  return (
    <div className="singlePokemonContainer__pokemon__header__badges">
      {allTypes}
    </div>
  );
};

export default PokemonTypes;
