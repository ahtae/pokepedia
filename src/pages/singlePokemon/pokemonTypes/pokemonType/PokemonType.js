import React from 'react';
import Badge from 'react-bootstrap/Badge';

const PokemonType = ({ type }) => {
  return (
    <div className={`singlePokemonContainer__pokemon__header__badges__badge`}>
      <Badge
        pill
        className={`singlePokemonContainer__pokemon__header__badges__badge--${type.toLowerCase()}`}
      >
        {type}
      </Badge>
    </div>
  );
};

export default PokemonType;
