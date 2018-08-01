json.set! guest.id do
  json.extract! guest, :id, :name, :age, :favorite_color
end
