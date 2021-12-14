class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  before_action :current_cart    
  helper_method :current_user
    
  private
    def current_cart
      if session[:cart_id]
        cart = Cart.find_by(:id => session[:cart_id])
        if cart.present?
          @current_cart = cart
        else
          session[:cart_id] = nil
        end
        
      end
  
      if session[:cart_id] == nil
        @current_cart = Cart.create
        session[:cart_id] = @current_cart.id
      end
    end
  
    def verified_user
      redirect_to '/' unless user_is_authenticated
    end
  
    def user_is_authenticated
      !!current_user
    end
  
    def current_user
      if session[:user_id]
        user = User.find_by(id: session[:user_id])
        if user.present?
          @current_user = user
        else
          session[:user_id]= nil
        end

        if session[:user_id] == nil
          @current_user = User.create
          session[:user_id] = @current_user.id
        end
      end
    end
end
 