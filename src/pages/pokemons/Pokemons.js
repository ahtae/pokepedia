import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../graphql/queries';
import {
  Pokemon,
  SearchBar,
  Loading,
  Error,
  ErrorHandler,
} from '../../components/';
import Trie from '../../utils/Trie';
import './Styles.scss';

const Pokemons = () => {
  const [search, setSearch] = useState('');
  const [hasClickedSearch, setHasClickedSearch] = useState(false);
  const [possibleWords, setPossibleWords] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [trie, setTrie] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    event.preventDefault();

    setSearch(event.target.value.trim());
    setHasClickedSearch(false);

    if (!event.target.value.trim()) {
      setHasClickedSearch(true);
    }
  };

  const handlePossibleWordClick = (search) => {
    setHasClickedSearch(true);
    setSearch(search.trim());
    setFilteredPokemons(
      search
        ? pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          )
        : pokemons
    );
  };

  const handleSearchClick = () => {
    setSearch(search.trim());
    setHasClickedSearch(true);
    setFilteredPokemons(
      search
        ? pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          )
        : pokemons
    );
  };

  const { data: { pokemons = [] } = {}, loading } = useQuery(GET_POKEMONS, {
    variables: { first: 811 },
    onCompleted: (data) => {
      const createdTrie = new Trie();

      createdTrie.insertAll(
        data.pokemons.map((pokemon) => pokemon.name.toLowerCase())
      );

      setTrie(createdTrie);
      setFilteredPokemons(data.pokemons);
    },
    onError: (error) => setError(error),
  });

  useEffect(() => {
    if (trie && search) {
      setPossibleWords(trie.autocomplete(search.toLowerCase()));
    }
  }, [search]);

  const allPokemons = filteredPokemons.length ? (
    filteredPokemons.map((pokemon) => (
      <Pokemon key={pokemon.id} pokemon={pokemon} />
    ))
  ) : (
    <p className="pokemonsContainer__paragraph">No matches found!</p>
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorHandler component={Error} message={error} />;
  }

  return (
    <div>
      <SearchBar
        search={search}
        handleSearchClick={handleSearchClick}
        hasClickedSearch={hasClickedSearch}
        handleSearchChange={handleSearchChange}
        handlePossibleWordClick={handlePossibleWordClick}
        possibleWords={possibleWords}
      />
      <div className="pokemonsContainer">{allPokemons}</div>
    </div>
  );
};

export default Pokemons;
