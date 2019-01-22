class User < ApplicationRecord
  before_create :generate_token

  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }

  def email_confirm
    self.confirmed = true
    self.confirmation_token = nil
    save
  end

  private

  def generate_token
    self.confirmation_token = SecureRandom.urlsafe_base64.to_s if confirmation_token.blank?
  end
end
