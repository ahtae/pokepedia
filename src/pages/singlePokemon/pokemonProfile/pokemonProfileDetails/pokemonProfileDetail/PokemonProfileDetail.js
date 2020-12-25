import React from 'react';
import Row from 'react-bootstrap/Row';

const PokemonProfileDetail = ({ type, information }) => {
  return (
    <Row>
      <div>
        <span className="singlePokemonContainer__pokemon__profileContainer__profile__details__detail">
          {type}
        </span>
        : {information}
      </div>
    </Row>
  );
};

export default PokemonProfileDetail;
