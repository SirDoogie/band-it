require 'rails_helper'

RSpec.describe FriendsController, type: :controller do
  describe '#index' do
    context 'when authorized' do
      subject(:index) { get :index }

      let(:sender) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:receiver) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let!(:friending) do
        sender.friend_request(receiver)
        receiver.friend_request(sender)
        sender.accept_request(receiver)
        receiver.accept_request(sender)
      end

      before { jwt_assign_cookies(sender.id) }

      it { expect(index).to have_http_status(:ok) }
      it { expect(sender.friends).to include(receiver) }
      it { expect(json['friends'].count).to eq 1 }
    end
  end

  describe '#update' do
    let(:sender) { FactoryBot.create(:confirmed_user, confirmed: true) }
    let(:receiver) { FactoryBot.create(:confirmed_user, confirmed: true) }

    context 'when authorized and user is blocked' do
      subject(:update) { put :update, params: { id: receiver.id } }

      let!(:friending) do
        sender.friend_request(receiver)
        receiver.friend_request(sender)
        sender.accept_request(receiver)
        receiver.accept_request(sender)
      end

      before { jwt_assign_cookies(sender.id) }

      it { expect(json['message']).to eq 'User blocked' }
    end

    context 'when authorized and user is not blocked' do
      subject(:update) { put :update, params: { id: receiver.id } }

      let!(:friending) do
        sender.friend_request(receiver)
        receiver.friend_request(sender)
        sender.accept_request(receiver)
        receiver.accept_request(sender)
        sender.block_friend(receiver)
      end

      before { jwt_assign_cookies(sender.id) }

      it { expect(json['message']).to eq 'User unblocked' }
    end
  end

  describe '#destroy' do
    context 'when authorized' do
      subject(:destroy) { delete :destroy, params: { id: for_del_user.id } }

      let(:main_user) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:for_del_user) { FactoryBot.create(:confirmed_user, confirmed: true) }
      let(:conversation) { FactoryBot.create(:conversation, sender: main_user, receiver: for_del_user) }
      let!(:friending) do
        for_del_user.friend_request(main_user)
        main_user.accept_request(for_del_user)
      end

      before { jwt_assign_cookies(main_user.id) }

      it { expect(destroy).to have_http_status(:ok) }
      it { expect(json['message']).to eq 'User removed' }
    end
  end
end
