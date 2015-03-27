defmodule OpensourceDo.Endpoint do
  use Phoenix.Endpoint, otp_app: :opensource_do

  # Serve at "/" the given assets from "priv/static" directory
  plug Plug.Static,
    at: "/", from: :opensource_do,
    only: ~w(css images js favicon.ico robots.txt fonts)

  plug Plug.Logger

  # Code reloading will only work if the :code_reloader key of
  # the :phoenix application is set to true in your config file.
  plug Phoenix.CodeReloader

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison

  plug Plug.MethodOverride
  plug Plug.Head

  plug Plug.Session,
    store: :cookie,
    key: "_opensource_do_key",
    signing_salt: "Xxw5tP18",
    encryption_salt: "9LCpRyY3"

  plug :router, OpensourceDo.Router
end
