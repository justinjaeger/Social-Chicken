const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');

const app = express();
const apiRouter = require('./routers/api');

// BODY PARSERS & COOKIE PARSER
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cookieParser());
//app.use(bodyParser.raw());

// SERVE UP STATIC FILES
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// SERVE INDEX.HTML ON THE ROUTE '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// API ROUTER
app.use('/api', apiRouter);

// HANDLING UNKNOWN URLS
app.use('*', (req, res) => {
  res.status(404).send('URL path not found');
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(401).send(err.message); // WHAT IS FRONT-END EXPECTING? JSON OR STRING?
});

//app.listen(3000); //listens on port 3000 -> http://localhost:3000/
app.listen(process.env.PORT || 3001);
module.exports = app;
