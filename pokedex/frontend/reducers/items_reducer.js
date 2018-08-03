import { RECEIVE_ITEMS, RECEIVE_ITEM } from '../actions/items_actions';

const itemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      const pokemonItems = {[action.poke.pokemon.id]}
      return ;
    default:
      return state;
  }
}

export default itemReducer;
