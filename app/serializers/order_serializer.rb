class OrderSerializer < ActiveModel::Serializer
    attributes :id, :email, :card_number, :card_expiration_date, :card_verification, :bill_firstname, :bill_lastname, :bill_address1, :bill_address2, :bill_city, :bill_state, :bill_zipcode, :ship_firstname, :ship_lastname, :ship_address1, :ship_address2, :ship_city, :ship_state, :ship_zipcode, :phone, :total
    belongs_to :customer
end