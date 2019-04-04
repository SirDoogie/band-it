class ProfilesController < ApplicationController
  expose :user, -> { params[:user_id].present? ? User.find(params[:user_id]) : current_user }
  expose :profile, -> { user.profile }

  def show
    render 'profiles/show', status: :ok
  end

  def update
    if profile.update(profile_params)
      render 'profiles/show', status: :ok
    else
      render json: { errors: profile.errors }, status: :bad_request
    end
  end

  private

  def profile_params
    params.require(:profile).permit(
      :first_name, :last_name, :about, :avatar, :birth_date, :country, :city, :education,
      :gender, :status, profile_skill_attributes: %i[instrument period _destroy],
                        profile_experience_attributes: %i[band_name period _destroy]
    )
  end
end
