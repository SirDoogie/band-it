require 'rails_helper'

RSpec.describe Conversation, type: :model do
  it { is_expected.to(belong_to(:sender).class_name('User'), foreign_key: 'sender_id') }

  it { is_expected.to(belong_to(:receiver).class_name('User'), foreign_key: 'receiver_id') }

  it { is_expected.to(have_many(:messages).dependent(:destroy)) }

  it { is_expected.to(validate_uniqueness_of(:sender_id).scoped_to(:receiver_id)) }

  describe '#by_user' do
    let(:sender) { FactoryBot.create(:confirmed_user) }
    let(:receiver) { FactoryBot.create(:confirmed_user) }
    let(:another_reciever) { FactoryBot.create(:confirmed_user) }
    let!(:conversation) { FactoryBot.create(:conversation, sender: sender, receiver: receiver) }
    let!(:another_conversation) { FactoryBot.create(:conversation, sender: sender, receiver: another_reciever) }

    context 'when conversations not nil' do
      subject { Conversation.by_user(sender) }

      it { is_expected.to eq([conversation] + [another_conversation]) }
    end

    context 'when conversation doesn\'t exist' do
      subject { Conversation.by_user(sender) }

      let(:second_sender) { FactoryBot.create(:confirmed_user) }
      let(:second_receiver) { FactoryBot.create(:confirmed_user) }
      let!(:second_conversation) { FactoryBot.create(:conversation, sender: second_sender, receiver: second_receiver) }

      it { is_expected.not_to eq([second_conversation]) }
    end
  end

  describe '#between' do
    let(:sender) { FactoryBot.create(:confirmed_user) }
    let(:receiver) { FactoryBot.create(:confirmed_user) }
    let!(:conversation) { FactoryBot.create(:conversation, sender: sender, receiver: receiver) }

    context 'when conversations not nil' do
      subject { Conversation.between(sender.id, receiver.id) }

      it { is_expected.to eq([conversation]) }
    end

    context 'when conversation doesn\'t exist' do
      subject { Conversation.between(sender.id, receiver.id) }

      let(:second_sender) { FactoryBot.create(:confirmed_user) }
      let(:second_receiver) { FactoryBot.create(:confirmed_user) }
      let!(:second_conversation) { FactoryBot.create(:conversation, sender: second_sender, receiver: second_receiver) }

      it { is_expected.not_to eq([second_conversation]) }
    end
  end
end
