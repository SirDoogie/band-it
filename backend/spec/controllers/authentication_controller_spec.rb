require 'rails_helper'

RSpec.describe AuthenticationController, type: :controller do
  describe 'POST #create' do
    let(:user) { FactoryBot.create(:confirmed_user) }

    context 'when login success' do
      subject(:create) { post :create, params: valid_params }

      let(:valid_params) { { email: user.email, password: user.password } }

      it { expect(create).to have_http_status(:ok) }
    end

    context 'when login failed' do
      subject(:create) { post :create, params: invalid_params }

      let(:invalid_params) { { email: user.email, password: 'asdasdasd' } }

      it { expect(create).to have_http_status(:unauthorized) }
      it { expect(json['error']).to eq('Unauthorized') }
    end
  end
end
