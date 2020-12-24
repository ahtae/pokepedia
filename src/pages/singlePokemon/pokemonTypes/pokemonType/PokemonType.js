import React from 'react';
import Badge from 'react-bootstrap/Badge';

const PokemonType = ({ type }) => {
  return (
    <Badge
      pill
      className={`singlePokemonContainer__pokemon__header__badges__badge singlePokemonContainer__pokemon__header__badges__badge--${type.toLowerCase()}`}
    >
      {type}
    </Badge>
  );
};

export default PokemonType;
