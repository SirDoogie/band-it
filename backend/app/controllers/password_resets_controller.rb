class PasswordResetsController < ApplicationController
  expose :user, -> { User.find_by(email: params[:email]) }

  def create
    if user.present? && user.confirmed?
      user.genarate_reset_token
      UserResetConfirmationMailer.reset_pwd_confirmation(user).deliver
      render json: { user: user }, status: :created
    else
      render json: { error: 'Email address not found. Please check and try again.' }, status: :not_found
    end
  end
end
