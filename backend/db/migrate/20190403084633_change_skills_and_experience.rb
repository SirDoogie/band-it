class ChangeSkillsAndExperience < ActiveRecord::Migration[5.2]
  def change
    change_column :profile_skills, :period, :integer
    change_column :profile_experiences, :period, :integer
  end
end
