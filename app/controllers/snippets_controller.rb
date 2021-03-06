class SnippetsController < ApplicationController
  def index
    @snippets = Snippet.all
  end

  def new
    @snippet = Snippet.new
  end

  def create
    @snippet = Snippet.new(snippet_params)

    if @snippet.save
      redirect_to snippets_path
    else
      render 'new'
    end
  end

  private

  def snippet_params
    params.require(:snippet).permit(:title, :language, :description, :body)
  end
end