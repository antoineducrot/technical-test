# todo-provided-server

# Running the project locally

1. Make sure you're using NodeJS v12. You can use
   [nvm](https://github.com/nvm-sh/nvm) to manage node versions on your system
   (run `nvm use` in the repository to automatically use the correct Node
   version for the current shell).
2. Install dependencies with `npm install`.
3. Install [Docker](https://www.docker.com/) and
   [docker-compose](https://docs.docker.com/compose/).
4. Run a local PostgreSQL database on port 5432 with `docker-compose up -d`.
5. Migrate the dabatase with `npm run migrate` and insert development data with
   `npm run seed`.
6. Run the app in development mode with `npm start`

# Using the project

The api is available at `http://localhost:4000/` and you can use the Playground if needed.

Feel free to check the graphql model directly in the code `src/graphql/typeDefs.graphql`
