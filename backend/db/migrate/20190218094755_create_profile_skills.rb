class CreateProfileSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_skills do |t|
      t.string :instrument
      t.float :period

      t.timestamps
    end
  end
end
