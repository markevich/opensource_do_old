use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :opensource_do, OpensourceDo.Endpoint,
  secret_key_base: "0IliRaimMzYplGME7owkvJSqiRWwiJEYnVGqtihxMrdR2BUjuybWLg2FYPIKxz3E"

# Configure your database
config :opensource_do, OpensourceDo.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "opensource_do_prod"
