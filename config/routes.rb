FirstRealApp::Application.routes.draw do
resources :users

root to: 'users#index'

 match '/new',  to: 'users#new'
end
