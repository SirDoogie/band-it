object user => nil

attributes :id, :email, :confirmed

child :profile do
  attributes :first_name, :last_name, :full_name, :birth_date, :gender, :education, :status, :country, :city, :avatar_url

  node :avatar_url do |u|
    rails_representation_url(u.avatar.variant(combine_options: { resize: '120x120', gravity: 'center', extent: '120x120' }).processed)
  end

  child :profile_skills, root: 'skills', object_root: false do
    attributes :instrument, :period
  end

  child :profile_experiences, root: 'experiences', object_root: false do
    attributes :band_name, :period
  end
end




