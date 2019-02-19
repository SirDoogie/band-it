require 'rails_helper'

RSpec.describe MessagesController, type: :controller do
  render_views

  describe '#index' do
    let(:sender) { FactoryBot.create(:confirmed_user) }
    let(:receiver) { FactoryBot.create(:confirmed_user) }
    let(:conversation) { FactoryBot.create(:conversation, sender: sender, receiver: receiver) }

    context 'when authorized and succeed' do
      subject(:index) { get :index, params: { conversation_id: conversation.id } }

      before { jwt_assign_cookies(sender.id) }

      it { expect(index).to have_http_status(:ok) }
    end
  end

  describe 'POST #create' do
    let(:sender) { FactoryBot.create(:confirmed_user) }
    let(:receiver) { FactoryBot.create(:confirmed_user) }
    let(:conversation) { FactoryBot.create(:conversation, sender: sender, receiver: receiver) }

    context 'when authorized and succeed' do
      subject(:create) { post :create, params: valid_params }

      before { jwt_assign_cookies(sender.id) }

      let(:valid_params) { { conversation_id: conversation.id, message: FactoryBot.attributes_for(:message, conversation_id: conversation.id, user_id: sender) } }

      it { expect(create).to have_http_status(:created) }
      it { expect(json['body']).to eq(valid_params[:message][:body]) }
    end
  end
end
