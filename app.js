// >>Requires<< //
var express = require('express');
var app = express();
var methodOverride =  require('method-override');
var path = require('path');
var session = require('express-session');
var cookies = require('cookie-parser');
var mainRouter = require('./src/routes/mainRouter')
var productsRouter = require('./src/routes/productsRouter');
var usersRouter = require('./src/routes/usersRouter');
var apiRouter = require('./src/routes/apiRouter');
// >>Localhost<< //
app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port 3000');
});

// >>Views EJS<< //
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// >>Routes<< //
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname,'./public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/*** RUTAS ***/
app.use("/", mainRouter)
app.use("/products", productsRouter)
app.use("/users", usersRouter)
app.use("/API", apiRouter)