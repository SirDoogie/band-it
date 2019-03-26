collection message, object_root: false

attributes :id, :body, :conversation_id, :read

node :created_at do |u|
  u.created_at.strftime('%H:%M')
end

child :user do
  attributes :id
  child :profile do
    attributes :full_name
    node :avatar_url do |u|
      rails_representation_url(u.avatar.variant(combine_options: { resize: '120x120', gravity: 'center', extent: '120x120' }).processed)
    end
  end
end
