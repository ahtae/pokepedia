import React from 'react';
import Row from 'react-bootstrap/Row';
import PokemonProfileDetails from './pokemonProfileDetails/PokemonProfileDetails';

const pokemonProfile = ({ pokemon }) => {
  return (
    <div className="singlePokemonContainer__pokemon__profileContainer">
      <Row className="singlePokemonContainer__pokemon__profileContainer__subheader">
        Profile
      </Row>
      <PokemonProfileDetails pokemon={pokemon} />
    </div>
  );
};

export default pokemonProfile;
