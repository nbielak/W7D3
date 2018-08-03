import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from "../actions/pokemon_actions";
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
      const newPoke = {[action.poke.pokemon.id]: action.poke.pokemon };
      return merge({}, state, newPoke);
    default:
      return state;
  }
};


export default pokemonReducer;
