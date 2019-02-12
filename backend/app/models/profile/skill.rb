class Profile
  class Skill < ApplicationRecord
    belongs_to :profile

    validates :instrument, :period, presence: true
  end
end
