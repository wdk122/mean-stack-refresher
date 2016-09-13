// https://www.youtube.com/watch?v=AEE7DY2AYvI
const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js')); 

app.listen(3000, () => {
  console.log('I\'m listening...');
})