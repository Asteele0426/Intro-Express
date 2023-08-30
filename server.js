//Load express
const express = require('express');
const path = require('path');

//require the To do 'database
const studentsDb = require('./data/student-db')

//Create our express app
const app = express();

//configure the app (app.set)\
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//mount middleware (app.use)


//mount routes


//Define a "root" route directly on app
//Next lesson we'll use better practice routing
app.get('/', function(req, res) {
res.send('<h1> Hello Express</h1>');
});

app.get(('home', function(req, res){
    //never begin the name of the template with a forward slash
    res.render('home');
}))

app.get('/students', function(req, res) {
  const students = studentsDb.getAll();
  res.render('students/index', { students });
});
app.get('/', function(req, res) {
    res.send('<h1>Hello Express!</h1>');
    });

app.listen(3005, function() {
    console.log('Listening on port 3005');
});