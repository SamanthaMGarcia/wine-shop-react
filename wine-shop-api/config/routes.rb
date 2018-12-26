Rails.application.routes.draw do
  namespace :api do
    resources :wines, except: [:new, :edit]
  end
end
