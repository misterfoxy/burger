// ### DEPENDENCIES ###
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// ### GLOBAL VARIABLES ###
const app = express();
const PORT = process.env.PORT || 3000;

// Import public directory for view styling
app.use(express.static(process.cwd() +"/public"));
// allow application to process body for URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
// allow application to use PUT method
app.use(methodOverride('_method'));

// set view engine as handlebars for application layout
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//import router from Controller portion of MVC
const routes = require('./controllers/burgers_controller.js');

// use router on root GET
app.use('/', routes);

// spin server
app.listen(PORT);
