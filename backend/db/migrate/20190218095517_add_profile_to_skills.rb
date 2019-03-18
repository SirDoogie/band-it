class AddProfileToSkills < ActiveRecord::Migration[5.2]
  def change
    add_reference :profile_skills, :profile, foreign_key: true
    add_reference :profile_experiences, :profile, foreign_key: true
  end
end
