const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;


require('dotenv').config();

app.use(express.urlencoded({ extended : true }));
app.use(express.static("Wealth"))

 