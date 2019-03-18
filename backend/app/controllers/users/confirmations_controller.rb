module Users
  class ConfirmationsController < ApplicationController
    skip_before_action :authorize_request!
    expose :user, -> { User.find_by(confirmation_token: params[:token]) }

    def create
      return render json: { message: 'User confirmed' }, status: :ok if user&.email_confirm

      render json: { message: "Can't find user with provided token" }, status: :unprocessable_entity
    end
  end
end
