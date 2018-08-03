import { connect } from 'react-redux';
import PokemonDetailView from './pokemon_detail_view';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, {pokemon}) => {
  debugger;
}

const mapDispatchToProps = (dispatch) => ({})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetailView)
