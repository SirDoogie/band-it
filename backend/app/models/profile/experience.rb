class Profile
  class Experience < ApplicationRecord
    belongs_to :profile

    validates :band_name, :period, presence: true
  end
end
