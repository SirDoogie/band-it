object user

attributes :id, :email, :confirmed

node :friend do |u|
  u.friends_with?(current)
end

child :profile do
  attributes :first_name, :last_name, :full_name, :birth_date, :gender, :education, :status, :country, :city, :avatar_url

  child :profile_skills, root: 'skills', object_root: false do
    attributes :instrument, :period
  end

  child :profile_experiences, root: 'experiences', object_root: false do
    attributes :band_name, :period
  end
end

child friends, root: "friends" do
  attributes :id
  child :profile do
    attributes :first_name, :avatar_url
  end
end
