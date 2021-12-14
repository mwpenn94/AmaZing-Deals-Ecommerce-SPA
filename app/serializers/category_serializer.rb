class CategorySerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :tags
    belongs_to :department
end