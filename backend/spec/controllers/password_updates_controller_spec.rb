require 'rails_helper'

RSpec.describe PasswordUpdatesController, type: :controller do
  describe 'POST #create' do
    context 'when succeed' do
      subject(:create) { post :create, params: valid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc) }
      let(:valid_params) { { token: user.reset_pwd_token, password: 'my_new_password...' } }

      it { expect(create).to have_http_status(:ok) }
      it { expect(json['user'][:reset_pwd_token]).to eq(nil) }
    end

    context 'when  bad_token' do
      subject(:create) { post :create, params: invalid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc) }
      let(:invalid_params) { { token: 'bad_token', password: 'my_new_password...' } }

      it { expect(create).to have_http_status(:not_found) }
      it { expect(json['error']).to eq('Token not present') }
    end

    context 'when  bad_new_password' do
      subject(:create) { post :create, params: invalid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc) }
      let(:invalid_params) { { token: user.reset_pwd_token, password: '1' } }

      it { expect(create).to have_http_status(:unprocessable_entity) }
      it { expect(json['error']).to eq('Bad new password') }
    end

    context 'when  token_is_expiered' do
      subject(:create) { post :create, params: invalid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc - 5.hours) }
      let(:invalid_params) { { token: user.reset_pwd_token, password: 'my_new_password...' } }

      it { expect(create).to have_http_status(:not_found) }
      it { expect(json['error']).to eq('Token not present') }
    end
  end
end
