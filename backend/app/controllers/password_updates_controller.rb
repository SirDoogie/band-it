class PasswordUpdatesController < ApplicationController
  expose :user_by_token, -> { User.find_by(reset_pwd_token: params[:token]) }

  def create
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
