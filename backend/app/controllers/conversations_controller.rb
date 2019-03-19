class ConversationsController < ApplicationController
  # include Pundit

  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  expose :user, -> { current_user }
  expose :conversation
  expose :conversations, -> { Conversation.by_user(user) }
  expose :matched_conversation, -> { Conversation.between(params[:sender_id], params[:receiver_id]).first }

  def index
    render 'conversations/index', status: :ok
  end

  def create
    return render 'conversations/show', status: :ok if matched_conversation.present?

    render 'conversations/create', status: :created if conversation.save
  end

  private

  def conversation_params
    params.permit(:sender_id, :receiver_id)
  end

  # def user_not_authorized(_exception)
  #   render json: { error: 'unauthorized' }, status: :unauthorized
  # end
end
