// runs all require calls through babel.
// BUT NOT THIS FILE
require('babel-register')

const express = require('express');
const React = require('react')
const ReactDOMServer = require('react-dom/server')
//const ReactRouter = require('react-router')
//const match = ReactRouter;

const Test = require('./src/Components/Test');

const port = 3000;

/*
Express allows us to add middlewares like body-parser to our application 
with the use method. You’ll hear the term middleware a lot when dealing 
with Express. These things are basically plugins that change the request 
or response object before they get handled by our application. 
*/
const bodyParser= require('body-parser')

const app = express();
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

//provides us with req.body
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'nunjucks');

app.get('/', function(req, res) {
  res.render('index.html', req.body);


  //res.render('index.html', {
  //  name: req.body.name,
  //  quote: req.body.quote,
  //  body: body
  //});

});

app.get('/login', (req, res) => {
  req.body.app = 'GET';

  const test = ReactDOMServer.renderToString(
    React.createElement(Test)
  )
  
  res.render('index.html', req.body);
})

app.post('/login', (req, res) => {
  req.body.app = 'POST';
  res.render('index.html', req.body);
})

app.listen(port, function() {
  console.log('listening on port ' + port)
});
