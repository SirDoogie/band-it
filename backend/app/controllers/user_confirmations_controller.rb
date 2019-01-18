class UserConfirmationsController < ApplicationController
  def create
    user = User.find_by(confirmation_token: params[:token])
    if user
      user.email_confirm
      render status: :ok
    else
      render status: :unprocessable_entity
    end
  end
end
