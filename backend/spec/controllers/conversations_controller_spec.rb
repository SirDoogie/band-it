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
        it { expect(json['sender_id']).to eq(valid_params[:sender_id][:id]) }
        it { expect(json['receiver_id']).to eq(valid_params[:receiver_id][:id]) }
      end
    end
  end
end
