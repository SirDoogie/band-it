require 'rails_helper'

RSpec.describe User, type: :model do
  it { is_expected.to validate_presence_of(:email) }

  it { is_expected.to validate_uniqueness_of(:email) }

  it { is_expected.to have_secure_password }

  it { is_expected.to validate_length_of(:password) }

  describe 'class methods' do
    describe '.email_confirm' do
      let(:user) { FactoryBot.create(:user) }

      it { expect(user.email_confirm).to be_truthy }
    end

    describe '.genarate_reset_token' do
      let(:user) { FactoryBot.create(:user) }

      it { expect(user.genarate_reset_token).to be_truthy }
    end

    describe '.password_token_valid?' do
      let(:user) { FactoryBot.create(:user, reset_pwd_token_time: Time.now.utc) }

      it { expect(user.password_token_valid?).to be_truthy }
    end

    describe '.reset_password' do
      let(:user) { FactoryBot.create(:user) }

      it { expect(user.reset_password('324r32f34f34')).to be true }
    end
  end
end
