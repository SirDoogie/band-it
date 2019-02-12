class AuthenticationsController < ApplicationController
  skip_before_action :authorize_request!, only: :create
  expose :user, -> { User.find_by(email: params[:email]) }

  def create
    if user&.authenticate(params[:password])
      generate_token
      render 'users/show', status: :ok
    else
      render json: { error: 'Username or password incorrect' }, status: :not_found
    end
  end

  def destroy
    cookies.delete(:jwt)
    render json: { message: 'Logged out' }, status: :ok
  end

  private

  def generate_token
    token = JsonWebToken.encode(user_id: user.id)
    cookies.signed[:jwt] = { value: token, expires: 24.hours.from_now, httponly: true }
  end
end
