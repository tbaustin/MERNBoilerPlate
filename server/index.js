const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB setup
mongoose.connect('mongodb://localhost/server_auth')
mongoose.Promise = global.Promise;
//App setup
const app = express();
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}))
router(app);

//Server setup
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening on: ', port);
});
