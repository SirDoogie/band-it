class PasswordResetsController < ApplicationController
  skip_before_action :authorize_request!, only: %i[create update]

  expose :user, -> { User.find_by(email: params[:email]) }
  expose :user_by_token, -> { User.find_by(reset_pwd_token: params[:token]) }

  def create
    if user.present? && user.confirmed?
      user.genarate_reset_token
      UserResetConfirmationMailer.reset_pwd_confirmation(user).deliver
      render json: { user: user }, status: :created
    else
      render json: { error: 'Email address not found. Please check and try again.' }, status: :not_found
    end
  end

  def update
    if user_by_token.present? && user_by_token.password_token_valid?
      if user_by_token.reset_password(params[:password])
        render json: { user: user_by_token }, status: :ok
      else
        render json: { error: 'Bad new password' }, status: :unprocessable_entity
       end
    else
      render json: { error: 'Token not present' }, status: :not_found
    end
  end
end
