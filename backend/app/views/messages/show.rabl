object nil
attributes :id, :body

node :created_at do |u|
  u.created_at.strftime('%H:%M')
end
