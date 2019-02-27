class AddUniqueIndexToFriendships < ActiveRecord::Migration[5.2]
  disable_ddl_transaction!

  def change
    return if index_exists?(:friendships, [:friendable_id, :friend_id])

    add_index :friendships, [:friendable_id, :friend_id], unique: true, algorithm: :concurrently
  end
end
