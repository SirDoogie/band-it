class AddConfirmationToUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users, bulk: true do |t|
      t.boolean :confirmed, default: false
      t.string :confirmation_token
    end
  end
end
