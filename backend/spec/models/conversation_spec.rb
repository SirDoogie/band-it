require 'rails_helper'

RSpec.describe Conversation, type: :model do
  it { is_expected.to(validate_uniqueness_of(:sender_id).scoped_to(:receiver_id)) }
end
