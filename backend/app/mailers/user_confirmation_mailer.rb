class UserConfirmationMailer < ApplicationMailer
  default from: 'support@example.com'

  def registration_confirmation(user)
    @user = user

    mail(to: @user.email, subject: 'Confirm Registration')
  end
end
