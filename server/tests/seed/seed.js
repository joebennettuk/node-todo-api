const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const userSeed = [{
  _id: userOneId,
  email: 'johntest@test.com',
  password: 'mypassword',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'secret').toString()
  }]
}, {
  _id: userTwoId,
  email: 'bob@test.com',
  password: 'mypassword'
}];

const todosTestSeed = [{
  _id: new ObjectID(),
  text: 'First todo'
}, {
  _id: new ObjectID(),
  text: 'second todo',
  completed: true,
  completedAt: 123123
}];

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(userSeed[0]).save();
    var userTwo = new User(userSeed[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todosTestSeed);
  }).then(() => done());
};

module.exports = {
  todosTestSeed,
  populateTodos,
  userSeed,
  populateUsers
}
