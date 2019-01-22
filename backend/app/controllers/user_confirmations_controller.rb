class UserConfirmationsController < ApplicationController
  expose :user, -> { User.find_by(confirmation_token: params[:token]) }

  def create
    return render status: :ok if user&.email_confirm

    render status: :unprocessable_entity
  end
end
