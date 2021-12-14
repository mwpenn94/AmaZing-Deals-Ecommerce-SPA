class UsersController < ApplicationController
  wrap_parameters :user, include: [:email, :username, :password]
#    before_action :set_user, only: [:show, :edit]

    def index
        @users = User.all
        render json: @users
    end

     def new
        @user = User.new
        render json: @user
      end
    
      def create
        @user = User.create!(user_params)
        render json: @user
      end
    
      def show
        @user = User.find(params[:id])
        render json: @user
      end

      def edit
        @user = User.find(params[:id])
        render json: @user
      end
  
      def update
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user
    end

    def login
      @found_user = User.find_by(email: params[:email])
      if @found_user
          render json: @found_user
      else
          render json: {error: "No user with that name exists"}
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end
  
      # Never trust parameters from the scary internet, only allow the white list through.
      def user_params
        params.require(:user).permit(:username, :email, :password, :support, :seller, :created_at, :updated_at)
      end
end
