import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component  {
  constructor(props){
    super(props);
    this.props = props
  }

  render() {
    const {id, name, image_url} = this.props.pokemon;

    return (
      <li>
        <Link to={`/pokemon/${id}`}>
          <h4>{name}</h4>
          <img src={image_url} />
        </Link>
      </li>
    )
  }

}

export default PokemonIndexItem;
