class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :name, :description
    belongs_to :user, :question
end