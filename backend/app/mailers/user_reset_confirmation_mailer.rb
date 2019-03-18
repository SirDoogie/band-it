class UserResetConfirmationMailer < ApplicationMailer
  default from: 'support@example.com'

  def reset_pwd_confirmation(user)
    @user = user

    mail(to: @user.email, subject: 'Confirm Reset Password')
  end
end
