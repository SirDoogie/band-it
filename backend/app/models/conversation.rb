class Conversation < ApplicationRecord
  belongs_to :sender, class_name: 'User', foreign_key: 'sender_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'
  has_many :messages, dependent: :destroy

  validates :sender_id, uniqueness: { scope: :receiver_id }

  scope :between, lambda { |sender_id, receiver_id|
    where('(conversations.sender_id = ? AND conversations.receiver_id = ?)
    OR (conversations.receiver_id = ? AND conversations.sender_id = ?)',
          sender_id, receiver_id, sender_id, receiver_id)
  }

  scope :by_current_user, ->(current_user) { where(sender_id: current_user.id).or(where(receiver_id: current_user.id)) }

  def self.by_user_name(full_name)
    ids = User.joins(:profile).where('first_name ILIKE ? OR last_name ILIKE ? ', "%#{full_name}%", "%#{full_name}%")
    where(sender: ids).or(where(receiver: ids))
  end

  def recipient?(current_user)
    sender_id == current_user.id ? receiver : sender
  end

  def last_message
    messages.last
  end
end
