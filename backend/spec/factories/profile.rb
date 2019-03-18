FactoryBot.define do
  factory :profile do
    first_name { 'David' }
    last_name { 'Smith' }
    birth_date { nil }
    country { nil }
    city { nil }
    gender { 'male' }
    education { nil }
    status { nil }
  end
end
