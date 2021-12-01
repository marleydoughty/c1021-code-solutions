const express = require('express');
const app = express();
let nextID = 1;
const grades = {};
express.json();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000');
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  body.id = nextID;
  nextID++;
  grades[body.id] = body;

  res.status(201);
  res.json(grades[body.id]);
});
