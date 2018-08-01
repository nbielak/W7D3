json.parties do
  @parties.each do |party|
    json.partial! 'party', party: party
  end
end

json.invitations({})

json.invitations do
  @parties.each do |party|
    party.invitations.each do |invitation|
      json.partial! 'api/invitations/invitation', invitation: invitation
    end
  end
end

json.guests({})

json.guests do
  @parties.each do |party|
    party.guests.each do |guest|
      json.partial! 'api/guests/guest', guest: guest
    end
  end
end
