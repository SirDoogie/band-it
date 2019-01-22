require 'rails_helper'

RSpec.describe UserConfirmationsController, type: :controller do
  describe 'POST #create' do
    subject(:user) { create :user }

    context 'when token correct' do
      let(:confirmation) { post 'create', params: { token: user.confirmation_token } }

      it { expect(confirmation).to have_http_status(:ok) }
    end

    context 'when incorrect token' do
      let(:confirmation) { post 'create', params: { token: 'invalid token' } }

      it { expect(confirmation).to have_http_status(:unprocessable_entity) }
    end
  end
end
