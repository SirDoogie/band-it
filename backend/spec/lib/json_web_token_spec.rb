require 'rails_helper'

describe JsonWebToken do
  let(:payload) { { user_id: 1 } }

  let(:encoded) { described_class.encode(payload) }

  context 'when decode' do
    it { expect(described_class.decode(encoded)).to eq(payload.as_json) }
  end
end
