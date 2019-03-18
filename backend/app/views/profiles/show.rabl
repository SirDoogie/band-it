object profile => nil

attributes :id, :first_name, :last_name, :birth_date, :gender, :education, :status, :country, :city, :avatar_url

node :avatar_url do |u|
  rails_blob_url(u.avatar)
end

child :profile_skills, root: 'skills', object_root: false do
  attributes :instrument, :period
end

child :profile_experiences, root: 'experiences', object_root: false do
  attributes :band_name, :period
end
