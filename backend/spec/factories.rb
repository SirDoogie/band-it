FactoryBot.define do
  factory :message do
    body { 'MyText' }
    conversation { nil }
    user { nil }
    read { false }
  end
  factory :conversation do
    sender_id { nil }
    receiver_id { nil }
  end
  factory :user do
    email { Faker::Internet.email }
    password { 'password' }
    reset_pwd_token { nil }
    reset_pwd_token_time { nil }
    confirmation_token { nil }
    confirmed { true }
  end
  factory :confirmed_user, parent: :user do
    confirmed { true }
  end
end
