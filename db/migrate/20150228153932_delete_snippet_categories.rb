class DeleteSnippetCategories < ActiveRecord::Migration
  def change
    drop_table :snippet_categories
  end
end
