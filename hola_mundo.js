const express = require('express');
const app = express();
const port = 8000;

app.set('port', process.env.PORT || port);

app.get('/', (req, res) => {
  res.send('Hello World!');
//   return res.sendFile(path.join(__dirname + './index.html'));
});

app.listen(port);
console.log('Server on port', port);