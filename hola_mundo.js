const express = require('express');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = app.get('port');

app.listen(port);
console.log('Server on port', port);