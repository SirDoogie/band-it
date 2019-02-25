Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :user_confirmations, only: :create
  resources :authentication, path: 'auth', only: :create
  resources :conversations, only: %i[index create] do
    resources :messages, only: %i[index create]
  end
  resources :password_resets, only: :create
  resources :password_updates, only: :create
end
