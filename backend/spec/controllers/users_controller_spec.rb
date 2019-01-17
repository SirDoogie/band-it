require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'POST #create' do
    subject(:user) { post 'create', params: { user: user_params } }

    let(:user_params) { attributes_for(:user) }

    context 'when given valid params' do
      it { expect(user).to be_created }
      it { expect(user.content_type).to eq 'application/json' }
    end

    context 'when given invalid params' do
      let(:user_params) { attributes_for(:user, email: nil) }

      it { expect(user).to have_http_status(:unprocessable_entity) }
    end
  end
end
