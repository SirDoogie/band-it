class User < ApplicationRecord
  before_create :generate_confirmation_token
  after_create :create_profile

  has_secure_password
  has_friendship

  has_one :profile, dependent: :destroy
  has_many :conversations, dependent: :destroy

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true

  def email_confirm
    self.confirmed = true
    self.confirmation_token = nil
    save
  end

  def genarate_reset_token
    self.reset_pwd_token = generate_token
    self.reset_pwd_token_time = Time.now.utc
    save
  end

  def generate_confirmation_token
    self.confirmation_token = generate_token if confirmation_token.blank?
  end

  def password_token_valid?
    reset_pwd_token_time + 4.hours > Time.now.utc
  end

  def reset_password(password)
    self.reset_pwd_token = nil
    self.password = password
    save
  end

  def create_profile
    build_profile
  end

  private

  def generate_token
    SecureRandom.urlsafe_base64.to_s
  end
end
