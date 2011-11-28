/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , good = require('./routes/good')
  , expense = require('./routes/expense');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

// Users
// Create
app.post('/user', user.create);
// Read
app.get('/user/:id', user.read);
app.get('/user', user.readAll);
// Update the user with the new data
app.put('/user/:id', user.update);
// Delete
app.delete('/user/:id', user.delete);

// Goods
// Create
app.post('/good', good.create);
// Read
app.get('/good/:id', good.read);
app.get('/good', good.readAll);
// Update
app.put('/good/:id', good.update);
// Delete
app.delete('/good/:id', good.delete);

// Expenses
// Create
app.post('/expense', expense.create);
// Read
app.get('/expense/:id', expense.read);
app.get('/expense', expense.readAll);
// Update
app.put('/expense/:id', expense.update);
// Delete
app.delete('/expense/:id', expense.delete);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
