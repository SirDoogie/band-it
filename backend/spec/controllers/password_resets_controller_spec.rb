require 'rails_helper'

RSpec.describe PasswordResetsController, type: :controller do
  describe 'POST #create' do
    context 'when succeed' do
      subject(:create) { post :create, params: valid_params }

      let(:user) { FactoryBot.create(:user, email: 'skr1p1@gmail.com') }
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
end
