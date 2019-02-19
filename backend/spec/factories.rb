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
    password { 'qwerty1234' }
    password_confirmation { 'qwerty1234' }
  end

  factory :confirmed_user, parent: :user do
    confirmed { true }
  end
end
