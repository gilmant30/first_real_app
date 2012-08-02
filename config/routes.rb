FirstRealApp::Application.routes.draw do
resources :users

root to: 'users#index'

 match '/new',  to: 'users#new'
 match 'game2' => 'users#game2'
 match 'game3' => 'users#game3'
end
