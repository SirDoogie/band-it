require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'POST #create' do
    subject(:user) { post 'create', params: { user: user_params }, format: :json }

    context 'when given valid params' do
      let(:user_params) { attributes_for(:user_credentials) }

      it { expect(user).to be_created }
      it { expect(user.content_type).to eq 'application/json' }
    end

    context 'when given nil email' do
      let(:user_params) { attributes_for(:user_credentials, email: nil) }
      let(:response) { JSON.parse(user.body, symbolize_names: true) }

      it { expect(response[:email]).to include "can't be blank" }
      it { expect(user).to have_http_status(:unprocessable_entity) }
    end

    context 'when given short password' do
      let(:user_params) { attributes_for(:user_credentials, password: '1234', password_confirmation: '1234') }
      let(:response) { JSON.parse(user.body, symbolize_names: true) }

      it { expect(response[:password]).to include 'is too short (minimum is 6 characters)' }
      it { expect(user).to have_http_status(:unprocessable_entity) }
    end
  end
end
