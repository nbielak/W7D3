import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonListItem from './pokemon_index_item'


class PokemonIndex extends React.Component{


  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props
    const pokemonList = pokemon.map( (pokemon) => (
      <PokemonListItem key={pokemon.id} pokemon={pokemon}/>
    ));
    return (
      <div>
        <ul>
          {pokemonList}
        </ul>
      </div>
    )
  }
}

export default PokemonIndex;
