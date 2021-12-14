class LineitemSerializer < ActiveModel::Serializer
    attributes :id, :quantity, :price
    belongs_to :order, :product, :cart
end