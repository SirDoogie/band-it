Rails.application.routes.draw do
  resource :authentication, path: 'auth', only: %i[create destroy]
  resources :users, only: %i[index create update] do
    resource :profile, only: %i[show update]
  end
  resource :password_resets, only: %i[create update]
  resources :conversations, only: %i[index create] do
    resources :messages, only: %i[index create]
  end
  resources :friends, only: %i[index update destroy]
  resources :friend_requests, only: %i[index create update destroy]
  namespace :users do
    resources :confirmations, only: :create
  end
end
