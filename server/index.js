const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

app.listen(3000, () => {
  console.log('app listening on 3000');
})