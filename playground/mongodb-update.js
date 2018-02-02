const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate(
    {name: 'Jogger'}, {
      $set: {
      name: 'Jagger'
    }, $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  });

  client.close();
  console.log('Client closed.')
});
