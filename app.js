const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended : true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(port, () => console.log(`listening to port ${port}`));

// /img/Image.jpg