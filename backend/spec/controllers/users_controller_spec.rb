require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe '#index' do
    let(:user) { FactoryBot.create(:confirmed_user) }

    context 'when authorized and succeed' do
      subject(:index) { get :index }

      before { jwt_assign_cookies(user.id) }

      it { expect(index).to have_http_status(:ok) }
    end
  end

  describe '#show' do
    let(:user) { FactoryBot.create(:confirmed_user) }

    context 'when authorized and succeed' do
      subject(:show) { get :show, params: { id: user.id } }

      before { jwt_assign_cookies(user.id) }

      it { expect(show).to have_http_status(:ok) }
    end
  end

  describe '#create' do
    subject(:user) { post 'create', params: { user: user_params }, format: :json }

    context 'when given valid params' do
      let(:user_params) { attributes_for(:user_signup) }

      it { expect(user).to be_created }
      it { expect(user.content_type).to eq 'application/json' }
    end

    context 'when given nil email' do
      let(:user_params) { attributes_for(:user_signup, email: nil) }

      it { expect(json['errors']['email']).to include 'can\'t be blank' }
      it { expect(user).to have_http_status(:unprocessable_entity) }
    end

    context 'when given short password' do
      let(:user_params) { attributes_for(:user_signup, password: '1234', password_confirmation: '1234') }

      it { expect(json['errors']['password']).to include 'is too short (minimum is 6 characters)' }
      it { expect(user).to have_http_status(:unprocessable_entity) }
    end
  end

  describe 'PUT #update' do
    context 'when succeed' do
      subject(:update) { put :update, params: valid_params }

      before { jwt_assign_cookies(user.id) }

      let(:user) { FactoryBot.create(:user) }
      let(:valid_params) { { user: { email: 'new_email@gmail.com' }, id: user.id } }

      it { expect(update).to have_http_status(:ok) }
    end

    context 'when not authorized' do
      subject(:update) { put :update, params: valid_params }

      before { jwt_assign_cookies(user.id) }

      let(:user) { FactoryBot.create(:user) }
      let(:valid_params) { { user: { email: 'new.com' }, id: user.id } }

      it { expect(update).to have_http_status(:unprocessable_entity) }
    end
  end
end
