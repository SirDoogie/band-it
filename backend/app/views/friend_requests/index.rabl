object :requests

child(pending_friends => :pending) do |request|
  extends('friend_requests/request', locals: {request: request})
end

child(requested_friends => :requested) do |request|
  extends('friend_requests/request', locals: {request: request})
end
