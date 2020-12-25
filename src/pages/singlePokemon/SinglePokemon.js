import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { GET_POKEMON } from '../../graphql/queries';
import {
  Loading,
  ErrorHandler,
  Error,
  PokemonNotFound,
  GoBackButton,
} from '../../components';
import PokemonTypes from './pokemonTypes/PokemonTypes';
import PokemonEvolutions from './pokemonEvolutions/PokemonEvolutions';
import PokemonProfile from './pokemonProfile/PokemonProfile';
import './Styles.scss';

const SinglePokemon = () => {
  const { pokemonId } = useParams();
  const [error, setError] = useState(null);

  const { data: { pokemon } = {}, loading } = useQuery(GET_POKEMON, {
    variables: { id: pokemonId },
    onError: (error) => setError(error),
  });

  if (loading) {
    return <Loading />;
  }

  if (!loading && !pokemon) {
    return <ErrorHandler component={PokemonNotFound} />;
  }

  if (error) {
    return <ErrorHandler component={Error} message={error} />;
  }

  return (
    <div className="singlePokemonContainer">
      <Container
        style={{ width: '60%' }}
        className="singlePokemonContainer__pokemon"
      >
        <Row className="singlePokemonContainer__pokemon__header">
          <Col>
            <h5>{pokemon.name}</h5>
            <PokemonTypes types={pokemon.types} />
          </Col>
        </Row>
        <Row className="singlePokemonContainer__pokemon__imageContainer">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            className="singlePokemonContainer__pokemon__imageContainer__image"
          />
        </Row>
        <PokemonProfile pokemon={pokemon} />
        <PokemonEvolutions evolutions={pokemon.evolutions} />
      </Container>
      <GoBackButton />
    </div>
  );
};

export default SinglePokemon;
