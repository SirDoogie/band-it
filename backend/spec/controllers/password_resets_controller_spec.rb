require 'rails_helper'

RSpec.describe PasswordResetsController, type: :controller do
  describe 'POST #create' do
    context 'when succeed' do
      subject(:create) { post :create, params: valid_params }

      let(:user) { FactoryBot.create(:user, confirmed: true) }
      let(:valid_params) { { email: user.email } }

      it { expect(create).to have_http_status(:created) }
      it { expect(json['user'][:email]).to eq(valid_params[:email]) }
    end

    context 'when  user not present' do
      subject(:create) { post :create, params: invalid_params }

      let(:user) { FactoryBot.create(:user, email: 'skr1p1@gmail.com') }
      let(:invalid_params) { { email: 'skrffffff1p1@gmail.com' } }

      it { expect(create).to have_http_status(:not_found) }
      it { expect(json['error']).to eq('Email address not found. Please check and try again.') }
    end

    context 'when  user not confirmed' do
      subject(:create) { post :create, params: invalid_params }

      let(:user) { FactoryBot.create(:user, confirmed: false) }
      let(:invalid_params) { { email: user.email } }

      it { expect(create).to have_http_status(:not_found) }
      it { expect(json['error']).to eq('Email address not found. Please check and try again.') }
    end
  end

  describe 'PUT #update' do
    context 'when succeed' do
      subject(:update) { put :update, params: valid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc) }
      let(:valid_params) { { token: user.reset_pwd_token, password: 'my_new_password...' } }

      it { expect(update).to have_http_status(:ok) }
      it { expect(json['user'][:reset_pwd_token]).to eq(nil) }
    end

    context 'when  bad_token' do
      subject(:update) { put :update, params: invalid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc) }
      let(:invalid_params) { { token: 'bad_token', password: 'my_new_password...' } }

      it { expect(update).to have_http_status(:not_found) }
      it { expect(json['error']).to eq('Token not present') }
    end

    context 'when  bad_new_password' do
      subject(:update) { put :update, params: invalid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc) }
      let(:invalid_params) { { token: user.reset_pwd_token, password: '1' } }

      it { expect(update).to have_http_status(:unprocessable_entity) }
      it { expect(json['error']).to eq('Bad new password') }
    end

    context 'when  token_is_expiered' do
      subject(:update) { put :update, params: invalid_params }

      let(:user) { FactoryBot.create(:user, reset_pwd_token: 'this_is_created_token', reset_pwd_token_time: Time.now.utc - 5.hours) }
      let(:invalid_params) { { token: user.reset_pwd_token, password: 'my_new_password...' } }

      it { expect(update).to have_http_status(:not_found) }
      it { expect(json['error']).to eq('Token not present') }
    end
  end
end
