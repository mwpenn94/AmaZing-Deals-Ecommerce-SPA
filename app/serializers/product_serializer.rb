class ProductSerializer < ActiveModel::Serializer
    attributes :id, :name, :price, :description, :averageReviewRating, :image
    has_many :lineitms, :orders, :taggings, :tags, :questions, :answers, :reviews
    belongs_to :seller

    def averageReviewRating
        self.object.average_review_rating 
    end
end