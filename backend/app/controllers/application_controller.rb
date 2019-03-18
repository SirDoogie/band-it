class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::Helpers

  before_action :authorize_request!

  private

  def authorize_request!
    cookies.signed[:jwt].present? ? current_user : unauthorized
  end

  def current_user
    decoded = JsonWebToken.decode(cookies.signed[:jwt])
    User.find(decoded[:user_id])
  rescue ActiveRecord::RecordNotFound
    unauthorized
  end

  def unauthorized
    render json: { error: 'Unauthorized' }, status: :unauthorized
  end
end
