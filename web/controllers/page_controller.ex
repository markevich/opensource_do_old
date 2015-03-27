defmodule OpensourceDo.PageController do
  use OpensourceDo.Web, :controller

  plug :action

  def index(conn, _params) do
    render conn, "index.html"
  end
end
