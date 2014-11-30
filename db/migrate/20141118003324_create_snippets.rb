class CreateSnippets < ActiveRecord::Migration
  def change
    create_table :snippets do |t|
      t.string :title, :language
      t.text :description, :body
      t.integer :user_id
      t.timestamp
    end
  end
end
