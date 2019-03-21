Rails.application.routes.draw do
  resource :authentication, path: 'auth', only: %i[create destroy]
  resource :profile, only: %i[show update]
  resources :conversations, only: %i[index create] do
    resources :messages, only: %i[index create]
  end
  resources :users, only: %i[index show create update] do
    resource :profile, only: %i[show update]
    resources :friends, only: %i[index]
  end
  resources :friends, only: %i[index update destroy]
  resources :friend_requests, path: 'requests', only: %i[index create update destroy]
  namespace :users do
    resources :confirmations, only: :create
  end
  resource :password_resets, only: %i[create update]
end
