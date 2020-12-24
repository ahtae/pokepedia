import { Link } from 'react-router-dom';
import React from 'react';
import './Styles.scss';

const GoBackButton = () => {
  return (
    <Link to="/pokemons">
      <button className="goBackButton">Go Back</button>
    </Link>
  );
};

export default GoBackButton;
