class FriendsController < ApplicationController
  expose :user, -> { current_user }
  expose :friends, -> { user.friends }
  expose :friend, -> { User.find_by(id: params[:id]) }
  expose :blocked_friends, -> { user.blocked_friends }
  expose :blocked_friend, -> { blocked_friends.find_by(id: friend.id) }

  def index
    render json: { friends: friends, blocked_friends: blocked_friends }, status: :ok
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
    render json: { message: 'User removed' }, status: :ok if user.remove_friend(friend)
  end
end
