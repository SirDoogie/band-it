FactoryBot.define do
  factory :user do
    email { 'user@example.com' }
    password { 'password' }

    factory :user_credentials do
      password_confirmation { 'password' }
    end
  end
end
