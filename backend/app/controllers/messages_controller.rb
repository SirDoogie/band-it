class MessagesController < ApplicationController
  expose :conversation
  expose :messages, -> { Message.where(conversation: conversation).sort_by(&:created_at) }
  expose :message, parent: :conversation

  def index
    render 'messages/index', status: :ok
  end

  def create
    return render 'messages/create', status: :created if message.save

    # return head :ok if message.save

    render json: message.errors, status: :unprocessable_entity
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id)
  end
end
