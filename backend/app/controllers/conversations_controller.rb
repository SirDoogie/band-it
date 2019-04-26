class ConversationsController < ApplicationController
  include Pagy::Backend

  expose :user, -> { current_user }
  expose :conversation
  expose :conversations, -> { Conversation.joins(:messages).by_current_user(user).by_user_name(params[:full_name]).group(:id).order('MAX(messages.id) DESC') }
  expose :matched_conversation, -> { Conversation.between(params[:sender_id], params[:receiver_id]).first }

  def index
    @pagy, @records = pagy(conversations, items: 50)
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
end
