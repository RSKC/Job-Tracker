const express = require ('express');
const app = express();

appp.use(express.json());

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen('3000');