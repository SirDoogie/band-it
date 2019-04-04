collection users

attributes :id, :email

child :profile do
  attributes :full_name, :avatar_url
end
