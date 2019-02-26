require 'rails_helper'

RSpec.describe Message, type: :model do
  it { is_expected.to(validate_presence_of(:body)) }

  it { is_expected.to(validate_presence_of(:conversation_id)) }

  it { is_expected.to(validate_presence_of(:user_id)) }

  it { is_expected.to(belong_to(:conversation)) }

  it { is_expected.to(belong_to(:user)) }
end
