class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def create

  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

# private
#   def pokemon_params
#     params.require(:pokemon).permit
#   end
end
