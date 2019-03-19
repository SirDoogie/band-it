node do
  { friends: partial('friends/friends', object: friends),
    blocked_friends: partial('friends/blocked_friends', object: blocked_friends) }
end
