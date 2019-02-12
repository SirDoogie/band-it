class UsersController < ApplicationController
  skip_before_action :authorize_request!, only: :create

  expose :users, -> { User.all }
  expose :user

  def index
    render 'users/index', status: :ok
  end

  def create
    if user.save
      UserConfirmationMailer.registration_confirmation(user).deliver
      render 'users/show', status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  def update
    if user.update(user_params)
      render 'users/show', status: :ok
    else
      render json: { errors: user.errors }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
