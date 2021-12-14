class QuestionSerializer < ActiveModel::Serializer
    attributes :id, :name, :description
    belongs_to :product
end