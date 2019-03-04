class UsersController < ApplicationController
  expose :user

  def create
    if user.save
      UserConfirmationMailer.registration_confirmation(user).deliver
      render json: user, status: :created
    else
      render json: { message: 'User is no created', errors: user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
