json.set! invitation.id do
  json.extract! invitation, :id, :guest_id, :party_id
end
