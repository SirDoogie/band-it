require 'rails_helper'

RSpec.describe ConversationsController, type: :controller do
  describe '#index' do
    context 'when authorized' do
      subject(:index) { get :index }

      let(:user) { FactoryBot.create(:confirmed_user) }

      before { jwt_assign_cookies(user.id) }

      it { expect(index).to have_http_status(:ok) }
    end
  end

  describe '#create' do
    context 'when authorized' do
      let(:sender) { FactoryBot.create(:confirmed_user) }
      let(:receiver) { FactoryBot.create(:confirmed_user) }
      let(:valid_params) { FactoryBot.attributes_for(:conversation, sender_id: sender, receiver_id: receiver) }

      before { jwt_assign_cookies(sender.id) }

      context 'when first conversation' do
        subject(:create) { post :create, params: valid_params }

        it { expect(create).to have_http_status(:created) }
      end

      context 'when not-first conversation' do
        subject(:create) { post :create, params: valid_params_created }

        let!(:create_conversation) { FactoryBot.create(:conversation, sender: sender, receiver: receiver) }
        let(:valid_params_created) { { sender_id: sender.id, receiver_id: receiver.id } }

        it { expect(create).to have_http_status(:ok) }
      end
    end
  end
end
