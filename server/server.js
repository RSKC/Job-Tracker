const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/new-application-form', (req, res) => {
  console.log(req.body);
  res.redirect('/new-application');
});

app.get('/metrics', (req, res) => {});

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);