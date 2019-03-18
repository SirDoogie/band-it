class AddPasswordResetColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :reset_pwd_token, :string
    add_column :users, :reset_pwd_token_time, :datetime
  end
end
