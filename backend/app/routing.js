let app = require('./app');

let index = require('../routes/index');
let todos = require('../routes/todos');

app.use('/', index);
app.use('/todos', todos);