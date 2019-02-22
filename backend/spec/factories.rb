FactoryBot.define do
  factory :user do
    email { 'user@example.com' }
    password { 'password' }
    reset_pwd_token { nil }
    reset_pwd_token_time { nil }
    confirmation_token { nil }
    confirmed { true }

    factory :user_credentials do
      password_confirmation { 'password' }
    end
  end
end
