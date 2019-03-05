require 'rails_helper'

RSpec.describe Profile::Skill, type: :model do
  it { is_expected.to belong_to(:profile) }
  it { is_expected.to validate_presence_of(:instrument) }
  it { is_expected.to validate_presence_of(:period) }
end
