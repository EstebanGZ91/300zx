// >>Requires<< //
const express = require('express');

const methodOverride =  require('method-override');
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');
const mainRouter = require('./src/routes/mainRouter')
const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const apiRouter = require('./src/routes/apiRouter');

// >>Localhost<< //
const app = express();
app.use (express.urlencoded({ extended: false}));
app.use (express.json());
app.use (express.static(path.join(__dirname,'./public')));
app.use(methodOverride('_method'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port 3000');
});

// >>Views EJS<< //
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);




/*** RUTAS ***/
app.use("/", mainRouter)
app.use("/products", productsRouter)
app.use("/users", usersRouter)
app.use("/API", apiRouter)