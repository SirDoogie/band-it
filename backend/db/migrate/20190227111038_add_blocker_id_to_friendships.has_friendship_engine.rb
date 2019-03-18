class AddBlockerIdToFriendships < ActiveRecord::Migration[5.2]
  def change
    add_column :friendships, :blocker_id, :integer, default: nil
  end
end
