class CreateSnippetTags < ActiveRecord::Migration
  def change
    create_table :snippet_tags do |t|
      t.integer :snippet_id, :tag_id
      t.timestamps
    end
  end
end
