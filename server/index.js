const express = require('express');
const path = require('path');
const parser = require('body-parser');
const app = express();
const router = require('./routes');

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', router);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

app.listen(3000, () => {
  console.log('app listening on 3000');
})