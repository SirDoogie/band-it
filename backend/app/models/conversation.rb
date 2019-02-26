class Conversation < ApplicationRecord
  belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'
  has_many :messages, dependent: :destroy

  validates :sender_id, uniqueness: { scope: :receiver_id }

  scope :by_user, ->(current_user) { where(current_user.id == 'sender_id' || current_user.id == 'receiver_id') }

  scope :between, lambda { |sender_id, receiver_id|
    where('(conversations.sender_id = ? AND conversations.receiver_id = ?)
    OR (conversations.receiver_id = ? AND conversations.sender_id = ?)',
          sender_id, receiver_id, sender_id, receiver_id)
  }
end
