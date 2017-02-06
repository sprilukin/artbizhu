let app = require('./app');
let path = require('path');
let ejs = require('ejs');

// view engine setup
app.set('views', path.join(__dirname, "..", 'views'));
app.engine('html', ejs.renderFile);
// app.set('view engine', 'ejs');
app.set('view engine', 'html');
