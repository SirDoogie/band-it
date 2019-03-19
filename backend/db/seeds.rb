User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
u = User.create(email: 'user@example.com', password: 'password', password_confirmation: 'password')

u.profile.update(first_name: 'John', last_name: 'Doe', birth_date: '1992-03-12', country: 'Ukraine', city: 'Cherkassy', gender: 'male', education: 'Cherkassy School of Music', status: 'in a band')
u.profile.avatar.attach(io: File.open('app/assets/images/demo/avatar.png'), filename: 'avatar.png')
u.profile.profile_skills.create(instrument: 'Guitar', period: 3.5)
u.profile.profile_experiences.create(band_name: 'Hollywood Undead', period: 1)

a = User.create(email: 'alpha@example.com', password: 'password', password_confirmation: 'password')
a.profile.update(first_name: 'Jack', last_name: 'Doe', education: 'Cherkassy School of Music', status: 'in a band')



b = User.create(email: 'alphda@example.com', password: 'password', password_confirmation: 'password')
b.profile.update(first_name: 'Jacsk', last_name: 'Does', education: 'Cherkassy School of Music', status: 'in a band')
