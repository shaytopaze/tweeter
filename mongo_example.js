"use strict";

const MongoClient = require("mongodb").MongoClient;
// const {MongoClient} = require("mongodb");  <--- destructuring assignment
const MONGODB_URI = process.env.MONGODB_URI;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`failed to connect: ${MONGODB_URI}`)
    throw err;
  }
   // ==> We have a connection to the "test-tweets" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:")
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });

});


