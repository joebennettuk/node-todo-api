const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  db.collection('Todos').deleteMany({text: 'Something to do'}).then((res) => {
    console.log('Deleted many.');
  });

  client.close();
  console.log('Client closed.')
});
