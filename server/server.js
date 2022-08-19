// all back end dependencies
// express 
import express, { json } from "express";
import path from 'path';

// 
import { MongoClient as mongodb } from "mongodb";

// creating an express application
const app = express();
const port = 3001;

// requiring our connection to the mongoose database
import db from "./config/connection";

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://127.0.0.1:27017/shelterDB`;

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
    // Defines connection between app and MongoDB instance
    connectionStringURI,
    // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      // Use client.db() constructor to add new db instance
      db = client.db();
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    }
  );

// built in express function that parses incoming requests to JSON
app.use(json());

