class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::Helpers

  def current_user
    jwt = cookies.signed[:jwt]
    decoded = JsonWebToken.decode(jwt)
    User.find(decoded[:user_id]) if jwt.present?
  end
end
