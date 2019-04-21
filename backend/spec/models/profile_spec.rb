require 'rails_helper'

RSpec.describe Profile, type: :model do
  context 'with association' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:profile_skills) }
    it { is_expected.to have_many(:profile_experiences) }
  end

  context 'with validations' do
    it { is_expected.to validate_presence_of(:first_name).on(:update) }
    it { is_expected.to validate_presence_of(:last_name).on(:update) }
    it { is_expected.to validate_inclusion_of(:gender).in_array(%w[male female]) }
    it { is_expected.to validate_length_of(:about).is_at_most(200).on(:update) }
  end

  context 'with nested attributes' do
    it { is_expected.to accept_nested_attributes_for(:profile_skills) }
    it { is_expected.to accept_nested_attributes_for(:profile_experiences) }
  end

  describe '.avatar_url?' do
    let(:user) { FactoryBot.create(:confirmed_user) }
    let(:attach_avatar) { user.profile.avatar.attach(io: File.open('app/assets/images/demo/avatars_for_seeds/avatar4.jpg'), filename: 'avatar4.png') }

    it { expect(user.profile.avatar_url).to eq user.profile.avatar_url }
  end
end
