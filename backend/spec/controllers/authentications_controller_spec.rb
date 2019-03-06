require 'rails_helper'

RSpec.describe AuthenticationsController, type: :controller do
  describe 'POST #create' do
    subject(:login) { post 'create', params: user_params }

    let!(:user) { create :user_signup }

    context 'when login success' do
      let(:user_params) { attributes_for(:user, email: user.email) }

      it { expect(login).to have_http_status(:ok) }
    end

    context 'when login failed' do
      let(:user_params) { attributes_for(:user, email: 'a@a.com') }

      it { expect(login).to have_http_status(:not_found) }
    end
  end
end
