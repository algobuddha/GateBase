const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/questions', (req, res) => {
  fs.readFile(path.join(__dirname, 'questions.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading questions.json');
    }
    res.json(JSON.parse(data));
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/questions-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'question.html'));
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on https://gatebase.onrender.com`);
});
