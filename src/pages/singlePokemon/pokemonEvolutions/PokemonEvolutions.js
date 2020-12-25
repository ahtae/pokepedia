import React from 'react';
import Row from 'react-bootstrap/Row';
import PokemonEvolution from './pokemonEvolution/PokemonEvolution';

const PokemonEvolutions = ({ evolutions }) => {
  const allEvolutions = evolutions ? (
    evolutions.map((evolution) => (
      <PokemonEvolution key={evolution.name} evolution={evolution} />
    ))
  ) : (
    <p>None!</p>
  );

  return (
    <div className="singlePokemonContainer__pokemon__evolutionsContainer">
      <Row className="singlePokemonContainer__pokemon__evolutionsContainer__subheader">
        Evolutions
      </Row>
      <div className="singlePokemonContainer__pokemon__evolutionsContainer__evolutions">
        {allEvolutions}
      </div>
    </div>
  );
};

export default PokemonEvolutions;
