import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  console.log(state);
  console.log(action);

  switch(action.type){
    case RECEIVE_ALL_POKEMON:

      for (let key in action.pokemons) {
        nextState[action.pokemons[key].id] = action.pokemons[key];
      }
      return nextState;
    default:
      return state;
  }
};


export default pokemonReducer;
