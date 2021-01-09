Rails.application.routes.draw do
  namespace :wechat do
    get "games/fullview"
    get "games/tower"
    get "games/introduce"
    get "games/menu"
    get "auth/login"
    get "auth/authorization"
  end

  root 'wechat/auth#authorization'
end
