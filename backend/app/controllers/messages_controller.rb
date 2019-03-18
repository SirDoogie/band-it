class MessagesController < ApplicationController
  expose :conversation
  expose :messages, -> { Message.where(conversation: conversation) }
  expose :message, parent: :conversation

  def index
    render json: messages, status: :ok
  end

  def create
    return render json: message, status: :created if message.save

    render json: message.errors, status: :unprocessable_entity
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id)
  end
end
