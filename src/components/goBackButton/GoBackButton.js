import { Link } from 'react-router-dom';
import React from 'react';
import './Styles.scss';

const GoBackButton = () => {
  return (
    <div className="goBackButtonContainer">
      <Link to="/pokemons">
        <button className="goBackButtonContainer__goBackButton">Go Back</button>
      </Link>
    </div>
  );
};

export default GoBackButton;
