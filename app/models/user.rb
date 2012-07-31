class User
  include Mongoid::Document
  field :name, type: String
  field :guess, type: Integer
  field :game_number, type: Integer
end
