class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :title, :description
    belongs_to :customer, :product
end