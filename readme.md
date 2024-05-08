# Future Blink API

A basic Node.js Express application.

## Installation and Usage

1. Clone the repository

   ```bash
   git clone https://github.com/ghritak/futureblink.git
   ```

2. Go to the project directory

   ```bash
   cd futureblink-api
   ```

3. Access the API endpoint in your browser at [http://localhost:4000](http://localhost:4000)

## Connect to MongoDb Database

1. Go to [MongoDb website](https://www.mongodb.com), Sign in to MongoDb Atlas or create account
2. Create a New Project at the top left corner by name future Blink
3. Create a deployment and choose M0 Free configuration, Create the cluster with name futureblink and then give a password and Create database user.
4. Choose a connection method > Driver > Node.js 5.5 or later > Copy the mongodb url string and place the username and password
5. Create a .env file and then paste the mongodb url string in .env like below

   ```bash
   DB_URI='mongodb+srv://<username>:<password>@futureblink.wwdo06g.mongodb.net/?retryWrites=true&w=majority&appName=futureblink'
   ```

6. Add your local machine IP Address by clicking the Add current IP Address Button
7. Terminate the server by Ctrl + C, then Restart the server after connecting to database

   ```bash
   yarn start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
