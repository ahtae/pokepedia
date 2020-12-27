import React from 'react';
import PokemonType from './pokemonType/PokemonType';
import Row from 'react-bootstrap/Row';

const PokemonTypes = ({ types }) => {
  const allTypes = types.map((type) => <PokemonType key={type} type={type} />);

  return (
    <Row className="singlePokemonContainer__pokemon__header__badges">
      {allTypes}
    </Row>
  );
};

export default PokemonTypes;
