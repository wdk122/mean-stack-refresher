// https://www.youtube.com/watch?v=AEE7DY2AYvI
const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.listen(3000, () => {
  console.log('I\'m listening...');
})