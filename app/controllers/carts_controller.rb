class CartsController < ApplicationController
  def show
    @cart = @current_cart
    render :json => @cart.to_json(:include => { :lineitems => { include: [:product, :order] }})
  end

  def destroy
    @cart = @current_cart
    @cart.destroy
    session[:cart_id] = nil
    render :json => @cart.to_json(:include => { :lineitems => { include: [:product, :order] }})
  end
end
