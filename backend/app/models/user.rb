class User < ApplicationRecord
  before_create :generate_token
  has_many :conversations, dependent: :destroy

  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true

  def email_confirm
    self.confirmed = true
    self.confirmation_token = nil
    save
  end

  def genarate_reset_token
    self.reset_pwd_token = SecureRandom.urlsafe_base64.to_s
    self.reset_pwd_token_time = Time.now.utc
    save
  end

  def password_token_valid?
    reset_pwd_token_time + 4.hours > Time.now.utc
  end

  def reset_password(password)
    self.reset_pwd_token = nil
    self.password = password
    save
  end

  private

  def generate_token
    self.confirmation_token = SecureRandom.urlsafe_base64.to_s if confirmation_token.blank?
  end
end
