class AuthenticationController < ApplicationController
  before_action :current_user, except: :create

  expose :user, -> { User.find_by(email: params[:email]) }

  def create
    if user&.authenticate(params[:password])
      generate_token
      render json: { user: user.email }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def generate_token
    token = JsonWebToken.encode(user_id: user.id)
    time = 24.hours.from_now
    cookies.signed[:jwt] = { value: token, expires: time, httponly: true }
  end
end
