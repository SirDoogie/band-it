class MessagesController < ApplicationController
  # include Pundit

  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  expose :user, -> { current_user }
  expose :conversation, parent: :user
  expose :messages, parent: conversation
  expose :message, parent: :messages

  def index
    render json: messages, status: :ok
  end

  def create
    return render json: message, status: :created if message.save?

    render json: message.errors, status: :unprocessable_entity
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id, :conversation_id)
  end

  # def user_not_authorized(_exception)
  #   render json: { error: 'unauthorized' }, status: :unauthorized
  # end
end
