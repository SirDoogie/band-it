require 'rails_helper'

RSpec.describe ProfilesController, type: :controller do
  describe 'GET #show' do
    subject(:profile) { get 'show', params: { user_id: user.id } }

    let(:user) { create :user_signup }
    let(:user_profile) { update user.profile, params: { profile: attributes_for(:profile) } }

    context 'when get profile data with jwt' do
      before { jwt_assign_cookies(user.id) }

      it { expect(profile.content_type).to eq 'application/json' }
      it { expect(profile).to have_http_status(:ok) }
      it { expect(profile).to render_template :show }
    end

    context 'when get profile data without jwt' do
      it { expect(profile.content_type).to eq 'application/json' }
      it { expect(profile).to have_http_status(:unauthorized) }
      it { expect(json['error']).to include 'Unauthorized' }
    end
  end

  describe 'PUT #update' do
    subject(:profile) { put 'update', params: { user_id: user.id, profile: profile_attributtes }, format: :json }

    let(:user) { create :user_signup }

    before { jwt_assign_cookies(user.id) }

    context 'when valid params' do
      let(:profile_attributtes) { attributes_for(:profile) }

      it { expect(profile.content_type).to eq 'application/json' }
      it { expect(profile).to have_http_status(:ok) }
    end

    context 'when invalid params' do
      let(:profile_attributtes) { attributes_for(:profile, first_name: nil) }

      it { expect(profile.content_type).to eq 'application/json' }
      it { expect(profile).to have_http_status(:bad_request) }
    end
  end
end
