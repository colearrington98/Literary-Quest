# Literary Quest

![image](https://github.com/colearrington98/Literary-Quest/assets/119268105/1f4ea9eb-b9b6-4349-b392-ecb863fb6a63)


Literary Quest is a web application that allows users to explore and save books from a database. Users can create an account, search for books, save their favorite books, and remove saved books. The application utilizes a client-server architecture with a React frontend and an Apollo Server backend.

## Features

- User authentication: Users can create an account, log in, and log out. Authentication is handled using JSON Web Tokens (JWT).
- Book search: Users can search for books by title, author, or keywords. The application fetches book data from a database and displays the search results.
- Book details: Users can view detailed information about each book, including the title, author, description, image, and a link to learn more.
- Save and remove books: Authenticated users can save books to their profile for future reference. They can also remove books from their saved list.
- Responsive design: The application is designed to be responsive and accessible across different devices and screen sizes.

## Installation

To run Literary Quest locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/literary-quest.git`
2. Navigate to the client directory: `cd literary-quest/client`
3. Install client dependencies: `npm install`
4. Navigate to the server directory: `cd ../server`
5. Install server dependencies: `npm install`
6. Set up environment variables: Create a `.env` file in the server directory and configure the necessary environment variables (e.g., database connection, JWT secret, etc.).
7. Start the development server: In the server directory, run `npm run watch` to start the server with Nodemon. In the client directory, run `npm start` to start the React development server.
8. Access the application: Open your web browser and visit `http://localhost:3000` to access the Literary Quest application.

## Deployment

Literary Quest can be deployed to a hosting platform such as Heroku. Follow these steps to deploy the application:

1. Set up a Heroku account and create a new app.
2. Connect the app to the Git repository: `heroku git:remote -a your-heroku-app-name`
3. Set up the necessary environment variables on the Heroku app, similar to the ones in the local `.env` file.
4. Deploy the application: `git push heroku main`
5. Open the deployed app: `heroku open`

## Technologies Used

- React: JavaScript library for building user interfaces.
- Apollo Server: GraphQL server implementation.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database for storing book and user data.
- JSON Web Tokens (JWT): Used for user authentication and authorization.
- Bootstrap: CSS framework for responsive and mobile-first design.
- Nodemon: Development tool that automatically restarts the server when changes are detected.
- Heroku: Cloud platform for deploying and hosting web application. 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to customize this README to include additional information specific to your Literary Quest project. Include sections such as "Usage," "API Documentation," or "Contributing Guidelines" if applicable.
