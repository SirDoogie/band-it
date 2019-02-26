require 'rails_helper'

RSpec.describe MessagesController, type: :controller do
  render_views

  describe '#index' do
    let(:sender) { FactoryBot.create(:confirmed_user) }
    let(:receiver) { FactoryBot.create(:confirmed_user) }
    let(:valid_params) { FactoryBot.create(:conversation, sender: sender, receiver: receiver) }

    context 'when authorized' do
      subject(:index) { get :index }

      before { jwt_assign_cookies(sender.id) }

      it { expect(index).to have_http_status(:ok) }
    end
  end
end
