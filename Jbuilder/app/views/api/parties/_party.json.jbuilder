json.set! party.id do
  json.extract! party, :id, :name, :location
end
