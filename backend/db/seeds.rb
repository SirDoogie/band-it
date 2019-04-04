Message.delete_all
Conversation.delete_all
User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

a = User.create(
  email: 'user@example.com',
  password: 'password',
  password_confirmation: 'password',
  confirmed: true,
  confirmation_token: nil
)

a.profile.update(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  birth_date: '1992-03-12',
  country: Faker::Address.country,
  city: Faker::Address.city,
  gender: 'male',
  education: Faker::University.name,
  status: 'in a band'
)

20.times do |i|
  u = User.create(
    email: "user#{i}@example.com",
    password: 'password',
    password_confirmation: 'password',
    confirmed: true,
    confirmation_token: nil
  )

  u.profile.update(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    birth_date: '1992-03-12',
    country: Faker::Address.country,
    city: Faker::Address.city,
    gender: 'male',
    education: Faker::University.name,
    status: 'in a band'
  )
  u.profile.avatar.attach(io: File.open("app/assets/images/demo/avatars_for_seeds/avatar#{i}.jpg"), filename: "avatar#{i}.png")
  u.profile.profile_skills.create(instrument: 'Guitar', period: 3.5)
  u.profile.profile_experiences.create(band_name: 'Hollywood Undead', period: 1)
end

a.friend_request(User.find(2))
a.friend_request(User.find(4))
User.find(2).accept_request(a)
User.find(4).accept_request(a)

15.times do |i|
  a = Conversation.create(sender_id: 1, receiver_id: i + 2)
  10.times do
    Message.create(body: Faker::Lorem.sentence, conversation: a, user_id: 1)
    Message.create(body: Faker::Lorem.sentence, conversation: a, user_id: i + 2)
  end
end
