class CartSerializer < ActiveModel::Serializer
    attributes :id, :subTotal
    has_many :lineitems, :products

    def subTotal
        self.object.sub_total
    end
end