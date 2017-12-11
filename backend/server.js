import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithreactredux';

mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.get('/api/movies', (req, res) => {
    db.collection('movies').find({}).toArray((err, movies) => {
      res.json({ movies });
    });
  });

  app.listen(8080, () => console.log('Server is running on localhost:8080'));

});