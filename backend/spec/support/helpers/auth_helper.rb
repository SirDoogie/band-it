module AuthHelper
  def jwt_assign_cookies(user_id)
    jwt = JsonWebToken.encode(user_id: user_id)
    cookies.signed['jwt'] = jwt
  end
end
