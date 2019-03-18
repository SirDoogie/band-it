class CreateProfileExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_experiences do |t|
      t.string :band_name
      t.float :period

      t.timestamps
    end
  end
end
