// all back end dependencies
// express 
const express = require("express")

// mongodb stuff
const mongodb = require('mongodb').MongoClient;

// creating an express application
const app = express();
const port = process.env.PORT || 3001;

// requiring our connection to the mongoose database
let db;

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
app.use(express.json());

// app.get will get whatever you are trying to find
// "/show" is just a custom name for whatever you are trying to do (see Insomnia)
app.get("/show", (req, res) => {
  // Use db connection to show the entire "jobsApplied" collection
  db.collection("jobsApplied")
    // .find finds all the jobs
    .find()
    // toarray converts the information into an array
    .toArray((err, results) => {
      // if there is an error show it, otherwise show the results
      if (err) throw err;
      res.send(results);
    });
});

app.get("showall", (req, res) => {
  
})