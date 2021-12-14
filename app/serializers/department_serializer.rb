class DepartmentSerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :categories
end