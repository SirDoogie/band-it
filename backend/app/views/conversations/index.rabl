collection conversations, object_root: false

attributes :id
node { |conversation| { user: partial('users/show', object: conversation.recipient?(user)) } }

node { |conversation| { message: partial('messages/show', object: conversation.last_message) } }
