class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :seller, :support
    has_many :orders, :products, :questions, :answers, :reviews
end