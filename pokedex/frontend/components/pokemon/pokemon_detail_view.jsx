import React from 'react';

class PokemonDetailView extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pokemon.name}</p>
      </div>
    )
  }
}

export default PokemonDetailView;
