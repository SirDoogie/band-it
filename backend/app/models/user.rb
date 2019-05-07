class User < ApplicationRecord
  before_create :generate_confirmation_token
  after_create :create_profile

  has_secure_password
  has_friendship

  has_one :profile, dependent: :destroy
  has_many :conversations, dependent: :destroy

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true

  scope :all_except, ->(user) { where.not(id: (user.friends + [user]).map(&:id)) }

  def email_confirm
    self.confirmed = true
    self.confirmation_token = nil
    save
  end

  def self.by_full_name(full_name)
    User.joins(:profile).where('first_name ILIKE ? OR last_name ILIKE ? ', "%#{full_name}%", "%#{full_name}%")
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

  private

  def generate_token
    SecureRandom.urlsafe_base64.to_s
  end
end
