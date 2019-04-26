child @pagy => :pagination do
  attributes :next
end

child @records => :chats do
  attributes :id
  node { |conversation| { user: partial('conversations/user', object: conversation.recipient?(user)) } }

  node { |conversation| { message: partial('messages/show', object: conversation.last_message) } }
end
