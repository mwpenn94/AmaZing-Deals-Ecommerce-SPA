class AnswersController < ApplicationController
    def index
        if params[:user_id]
            @user = User.find(params[:user_id])
            @answers = User.find(params[:user_id]).answers
            @questions = Question.all
        else
            @answers = Answer.all
            @questions = Question.all
        end
        render json: @answers, @questions
    end

    def show
        @answer = Answer.find(params[:id])
        @question = Question.find(params[:id])
        render json: @answer, @question
    end

    def new 
        if params[:user_id] && !User.exists?(params[:user_id])
            redirect_to users_path, alert: "user not found."
        else
            @answer = Answer.new(user_id: params[:user_id], question_id: params[:question_id])
        end
        render json: @answer
    end

    def create
        @answer = Answer.new(answer_params)
        @answer.save
        render json: @answer
    end

    def edit
        if params[:user_id]
            user = User.find_by(id: params[:user_id])
            if user.nil?
                redirect_to users_path, alert: "user not found."
            else
                @answer = user.answers.find_by(id: params[:id])
                redirect_to user_answers_path(user), alert: "answer not found." if @answer.nil?
            end
        else
            @answer = Answer.find(params[:id])
        end
        render json: @answer
    end

    def update
        @answer = Answer.find(params[:id])
        @answer.update(answer_params)
        render json: @answer
    end

    private

    def answer_params
        params.require(:answer).permit(:name, :description, :user_id, :question_id, :created_at, :updated_at)
    end
end
