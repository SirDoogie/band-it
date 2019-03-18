module JsonHelper
  def json
    JSON.parse(subject.body).with_indifferent_access
  end
end
