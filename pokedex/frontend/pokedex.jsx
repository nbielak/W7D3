import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util.js';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
