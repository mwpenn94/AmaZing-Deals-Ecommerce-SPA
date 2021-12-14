class TagsController < ApplicationController
    def index
        @tags = Tag.all
        render json: @tags
    end

    def new
        @tag = Tag.new
        render json: @tag
    end

    def create
        @tag = Tag.new(tag_params)
        @tag.save
        render json: @tag
    end

    def edit
        @tag = Tag.find(params[:id])
        render json: @tag
    end

    def update
        @tag = Tag.find(params[:id])
        @tag.update(tag_params)
        render json: @tag
    end

    def destroy
        @tag = Tag.find(params[:id])
        @tag.destroy
        render json: @tag
    end
    private

    def tag_params
        params.require(:tag).permit(:name, :created_at, :updated_at)
    end
end
