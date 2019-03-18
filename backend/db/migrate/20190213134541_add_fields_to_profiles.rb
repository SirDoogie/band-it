class AddFieldsToProfiles < ActiveRecord::Migration[5.2]
  def change
    change_table :profiles, bulk: true do |t|
      t.date :birth_date
      t.string :gender
      t.string :education
      t.string :country
      t.string :city
      t.string :status
    end
  end
end
