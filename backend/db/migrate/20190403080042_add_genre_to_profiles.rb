class AddGenreToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :genre, :string
  end
end
