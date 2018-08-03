import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailViewContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route Path ='/' component={ PokemonIndexContainer } />
        <PokemonDetailViewContainer />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
