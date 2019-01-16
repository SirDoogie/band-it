class User < ApplicationRecord
  before_create :confirmation_token

  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }

  private

  def confirmation_token
    if self.confirmation_token.blank?
      self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
  end

  def email_confirm
    self.confirmed = true
    self.confirmation_token = nil
    save
  end
end
