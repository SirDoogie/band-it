object friend

attributes :id

child :profile do
  attributes :full_name

  node :avatar_url do |p|
    rails_representation_url(p.avatar.variant(combine_options: { resize: '120x120', gravity: 'center', extent: '120x120' }).processed)
  end
end