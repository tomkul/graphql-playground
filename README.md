## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/tomkul/graphql-playground.git
    ```

2. Navigate to the project directory:

    ```bash
    cd graphql-playground
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the GraphQL server:

    ```bash
    npm start
    ```

5. Open your browser and go to [http://localhost:4000](http://localhost:4000).

6. Run the following example query in GraphQL Playground:

    ```graphql
    query ExampleQuery {
      hello,
      getPost(id: 1) {
        userId
        id
        title
        body
      }
    }
    ```
