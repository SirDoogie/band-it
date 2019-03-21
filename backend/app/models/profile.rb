class Profile < ApplicationRecord
  after_create :default_avatar

  belongs_to :user
  has_many :profile_experiences, class_name: 'Profile::Experience', dependent: :destroy
  has_many :profile_skills, class_name: 'Profile::Skill', dependent: :destroy

  validates :first_name, :last_name, presence: true, on: :update
  validates :gender, inclusion: { in: %w[male female] }, allow_blank: true
  validates :about, length: { maximum: 200 }

  has_one_attached :avatar

  accepts_nested_attributes_for :profile_experiences, :profile_skills, reject_if: :all_blank, allow_destroy: true

  DEFAULT_AVATAR_PATH = Rails.root.join('app', 'assets', 'images', 'fallback', 'profile.png')
  AVATAR_VARIANT_OPTIONS =  { resize: '120x120', gravity: 'center', extent: '120x120' }

  def default_avatar
    avatar.attach(io: File.open(DEFAULT_AVATAR_PATH), filename: 'profile.png') unless avatar.attached?
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def avatar_url
    Rails.application.routes.url_helpers.rails_representation_url(avatar.variant(combine_options: AVATAR_VARIANT_OPTIONS).processed)
  end
end
