class Snippet < ActiveRecord::Base
  belongs_to :user
  has_many :languages
  has_many :snippet_tags
  has_many :tags, through: :snippet_tags

  validates :title, presence: true
  validates :language, presence: true
  validates :body, presence: true
end