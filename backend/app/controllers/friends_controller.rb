class FriendsController < ApplicationController
  expose :user, -> { params[:user_id].present? ? User.find(params[:user_id]) : current_user }
  expose :friends, -> { user.friends }
  expose :friend, -> { User.find_by(id: params[:id]) }
  expose :blocked_friends, -> { user.blocked_friends }
  expose :blocked_friend, -> { blocked_friends.find_by(id: friend.id) }

  def index
    render 'friends/index', status: :ok
  end

  def update
    if blocked_friend.present?
      user.unblock_friend(friend)
      user.friend_request(friend)
      friend.accept_request(user)
      render json: { message: 'User unblocked' }
    else
      user.block_friend(friend)
      render json: { message: 'User blocked' }
    end
  end

  def destroy
    user.remove_friend(friend)
    render json: { message: 'User removed', user: { id: friend.id } }, status: :ok
  end
end
