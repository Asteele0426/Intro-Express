const students = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];
// const getAll = () => {}
  module.exports = {
    getAll: function(){
        return students;
    }
  }