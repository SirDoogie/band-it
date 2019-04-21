FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { 'qwerty1234' }
    factory :user_signup do
      password_confirmation { 'qwerty1234' }
    end
  end

  factory :confirmed_user, parent: :user do
    confirmed { true }
  end
end
