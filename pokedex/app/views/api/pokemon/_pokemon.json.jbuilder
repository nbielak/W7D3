json.set! pokemon.id do
  json.extract! pokemon, :id, :name, :image_url
end
