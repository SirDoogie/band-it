node do
  { pending_friends: partial('friend_requests/pending_friends', object: user_requested_friends),
    address: partial('friend_requests/requested_friends', object: user_requested_friends) }
end
