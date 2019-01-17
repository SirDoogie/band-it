require 'rails_helper'

RSpec.describe UserConfirmationMailer, type: :mailer do
  describe 'email confirmation' do
    subject(:user) { create :user }

    let(:mail) { UserConfirmationMailer.registration_confirmation(user) }

    context 'renders the headers' do
      it { expect(mail.subject).to eq('Confirm Registration') }
      it { expect(mail.to).to eq([user.email]) }
      it { expect(mail.from).to eq(['support@example.com']) }
    end

    context 'renders the body' do
      it { expect(mail.body.encoded).to match('Hi!') }
    end
  end
end
