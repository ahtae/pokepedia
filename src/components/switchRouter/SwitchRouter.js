import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Pokemons, SinglePokemon, NotFound } from '../../pages';

const SwitchRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pokemons/:pokemonId">
          <SinglePokemon />
        </Route>
        <Route exact path="/pokemons">
          <Pokemons />
        </Route>
        <Route exact path="/">
          <Pokemons />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default SwitchRouter;
