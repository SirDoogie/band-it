require 'rails_helper'

RSpec.describe FriendRequestsController, type: :controller do
  describe '#index' do
    context 'when authorized' do
      subject(:index) { get :index }

      let(:sender) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:receiver) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let!(:friending) do
        sender.friend_request(receiver)
      end

      before { jwt_assign_cookies(sender.id) }

      it { expect(index).to have_http_status(:ok) }
      it { expect(receiver.requested_friends).to include(sender) }
      it { expect(sender.pending_friends).to include(receiver) }
      it { expect(json['pending_requests'].count).to eq 1 }
    end
  end

  describe '#create' do
    context 'when authorized' do
      subject(:create) { post :create, params: { id: receiver.id } }

      let(:sender) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:receiver) { FactoryBot.create(:confirmed_user, confirmed: true) }

      before { jwt_assign_cookies(sender.id) }

      it { expect(create).to have_http_status(:created) }
      it { expect(json['message']).to eq('Request delivered') }
    end
  end

  describe '#update' do
    context 'when authorized' do
      subject(:update) { put :update, params: { id: receiver.id } }

      let(:sender) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:receiver) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let!(:friending) { receiver.friend_request(sender) }

      before { jwt_assign_cookies(sender.id) }

      it { expect(update).to have_http_status(:ok) }
      it { expect(json['message']).to eq('Request accepted') }
    end
  end

  describe '#destroy' do
    context 'when authorized' do
      subject(:destroy) { delete :destroy, params: { id: receiver.id } }

      let(:sender) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:receiver) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let!(:friending) { receiver.friend_request(sender) }

      before { jwt_assign_cookies(sender.id) }

      it { expect(destroy).to have_http_status(:ok) }
      it { expect(json['message']).to eq('Request declined') }
    end
  end
end
