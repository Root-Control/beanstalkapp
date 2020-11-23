'use strict';

const { request } = require('express');
const express = require('express');
const app = express();
const port = 8080
let requestCounter = 0;

app.get('/', (req, res) => {
  console.log(`Request received at ${new Date()}`)
  requestCounter++;
  res.send('Hello World!');
});

app.get('/counter', (req, res) => {
  res.json({
    counter: requestCounter
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})