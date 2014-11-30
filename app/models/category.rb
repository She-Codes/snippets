class Category < ActiveRecord::Base
  has_many :snippet_categories
  has_many :snippets, through: :snippet_categories
end