# Url-Shortner

This is a simple URL shortener built with Node.js and MongoDB.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/Node_url_shortener.git
    ```

2. Install the dependencies:

    ```bash
    cd Node_url_shortener
    npm install
    ```

3. Set up the MongoDB connection:

    - Make sure you have MongoDB installed and running on your local machine.
    - Open the `index.js` file and modify the MongoDB connection URL in the `connectToDb` function to match your MongoDB configuration.

4. Start the server:

    ```bash
    npm start
    ```

5. Access the application:

    Open your browser and navigate to `http://localhost:8001`.

## Usage

- To create a shortened URL, send a POST request to `/url` with a JSON payload containing the `originalURL` property.
- To access a shortened URL, simply append the short ID to the base URL, e.g., `http://localhost:8001/abc123`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).