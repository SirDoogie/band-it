child @pagy => :pagination do
  attributes :next, :count
end

child @records => :users do
  attributes :id, :email

  child :profile do
    attributes :full_name, :avatar_url
  end
end
