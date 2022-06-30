const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

const connectDb = require('./server/database/connection')

const app = express();


dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;

// log request
app.use(morgan('tiny'))

// mongodb connection
connectDb();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set('view engine', 'ejs');

// load assets
// app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
// app.use('/js', express.static(path.resolve(__dirname, '/index.js')))

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});