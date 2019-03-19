class FriendRequestsController < ApplicationController
  expose :user, -> { current_user }
  expose :user_requested_friends, -> { user.requested_friends }
  expose :user_pending_friends, -> { user.pending_friends }
  expose :person, -> { User.find_by(id: params[:id]) }

  def index
    render 'friend_requests/index', status: :ok
  end

  def create
    render json: { message: 'Request delivered' }, status: :created if user.friend_request(person)
  end

  def update
    render json: { message: 'Request accepted' }, status: :ok if user.accept_request(person)
  end

  def destroy
    render json: { message: 'Request declined' }, status: :ok if user.decline_request(person)
  end
end
