class OrdersController < ApplicationController
    def index
        if params[:user_id]
            @orders = Order.where(customer_id: params[:user_id])
        else
            @orders = Order.all
        end
        print params
        render :json => @orders.to_json(:include => [:lineitems, :products, :customer])
    end

    def show
        @order = Order.find(params[:id])
        render :json => @order.to_json(:include => [:lineitems, :products, :customer])
    end

    def new
        @order = Order.new(customer_id: current_user.id)
        render :json => @order.to_json(:include => [:lineitems, :products, :customer])
    end

    def create
        @order = Order.new(order_params)
        @current_cart.lineitems.each do |item|
          @order.lineitems << item
          item.cart_id = nil
        end

        @order.email = @order.customer.email
        @order.total = @order.sub_total
#        @order.customer_id = current_user.id
        active_merchant_biller
        @order.save
        Cart.destroy(session[:cart_id])
        session[:cart_id] = nil
        render :json => @order.to_json(:include => [:lineitems, :products, :customer])
    end

    def edit
        @order = Order.find(params[:id])
        render :json => @order.to_json(:include => [:lineitems, :products, :customer])
    end

    def update
        @order = Order.find(params[:id])
        @order.update(order_params)
        render :json => @order.to_json(:include => [:lineitems, :products, :customer])
    end

    
    def destroy
        @order = Order.find(params[:id])
        @order.destroy
        render :json => @order.to_json(:include => [:lineitems, :products, :customer])
    end
    
    private

    def active_merchant_sub_total
        @order.sub_total * 100
    end

    def active_merchant_biller
        credit_card = ActiveMerchant::Billing::CreditCard.new(
        :number     => order_params[:card_number],
        :month      => order_params[:card_expiration_date].split("-")[1],
        :year       => order_params[:card_expiration_date].split("-")[0],
        :first_name => order_params[:bill_firstname],
        :last_name  => order_params[:bill_lastname],
        :verification_value  =>  order_params[:card_verification]
        )
        if credit_card.valid?
          gateway = ActiveMerchant::Billing::TrustCommerceGateway.new(
            :login    => 'TestMerchant',
            :password => 'password'
            ) 
            response = gateway.authorize(active_merchant_sub_total, credit_card)
             if response.success?
              gateway.capture(active_merchant_sub_total, response.authorization)
            else
                flash[:error] = "Insufficient funds. Please enter a different payment method."
            end
        else
            flash[:error] = "Please enter information to resolve the following errors: #{credit_card.validate}"
        end
    end

    def order_params
        params.require(:order).permit(:card_number, :card_expiration_date, :card_verification, :bill_firstname, :bill_lastname, :bill_address1, :bill_address2, :bill_city, :bill_state, :bill_zipcode, :ship_firstname, :ship_lastname, :ship_address1, :ship_address2, :ship_city, :ship_state, :ship_zipcode, :phone, :total, :customer_id, :created_at, :updated_at)
    end
end
