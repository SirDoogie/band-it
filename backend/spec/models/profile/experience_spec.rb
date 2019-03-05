require 'rails_helper'

RSpec.describe Profile::Experience, type: :model do
  it { is_expected.to belong_to(:profile) }
  it { is_expected.to validate_presence_of(:band_name) }
  it { is_expected.to validate_presence_of(:period) }
end
