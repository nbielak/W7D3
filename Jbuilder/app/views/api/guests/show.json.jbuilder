# json.guest do
#   json.partial! 'guest', guest: @guest
# end

json.extract! @guest, :id, :name, :age, :favorite_color

json.gifts({})

json.gifts do
  @guest.gifts.each do |gift|
    json.partial! 'api/gifts/gift', gift: gift
  end
end
