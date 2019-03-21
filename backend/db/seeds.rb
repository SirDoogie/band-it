User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
u = User.create(email: 'user@example.com', password: 'password', password_confirmation: 'password')

u.profile.update(first_name: 'Tony', last_name: 'Stark', birth_date: '1992-03-12', country: 'Ukraine', city: 'Cherkassy', gender: 'male', education: 'Cherkassy School of Music', status: 'in a band')
u.profile.avatar.attach(io: File.open('app/assets/images/demo/avatar.png'), filename: 'avatar.png')
u.profile.profile_skills.create(instrument: 'Guitar', period: 3)
u.profile.profile_experiences.create(band_name: 'Hollywood Undead', period: 1)

a = User.create(email: 'alpha@example.com', password: 'password', password_confirmation: 'password')
a.profile.update(first_name: 'Steve', last_name: 'Rodgers', education: 'Cherkassy School of Music', status: 'in a band', gender: 'male')

b = User.create(email: 'thor@example.com', password: 'password', password_confirmation: 'password')
b.profile.update(first_name: 'Thor', last_name: 'Odinson', education: 'Cherkassy School of Music', status: 'in a band', gender: 'male')

y = User.create(email: 'rocket@example.com', password: 'password', password_confirmation: 'password')
y.profile.update(first_name: 'Rocket', last_name: 'Raccoon', education: 'Cherkassy School of Music', status: 'in a band', gender: 'male')

u.friend_request(a)
a.accept_request(u)

