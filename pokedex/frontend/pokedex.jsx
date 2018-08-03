import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util.js';
import { receiveAllPokemon, receiveSinglePokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';
import { receiveItems, receiveItem } from './actions/items_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
