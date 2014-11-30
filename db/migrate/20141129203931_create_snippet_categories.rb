class CreateSnippetCategories < ActiveRecord::Migration
  def change
    create_table :snippet_categories do |t|
      t.integer :snippet_id, :category_id
      t.timestamps
    end
  end
end
