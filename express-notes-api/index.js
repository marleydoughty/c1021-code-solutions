const express = require('express');
const notesObject = require('./data.json');
const app = express();
let nextID = 1;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = Object.keys(notesObject.notes).map(key => {
    return notesObject.notes[key];
  });
  res.status(200);
  res.json(array);
}
);

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ Error: 'id must be a postive integer' });
  } else if (!notesObject.notes[id]) {
    res.status(404).json({ Error: `cannot find id ${id}` });
  } else {
    res.status(200).json(notesObject.notes[req.params.id]);
  }
});

app.post('/api/notes', (req, res) => {
  const body = req.body;
  if (!body.content) {
    res.status(400).json({ Error: 'content is a required field' });
  // } else if (!notesObject.notes[body.content]) {
    // res.status(500).json({ Error: 'An unexpected error occurred' });
  } else {
    body.id = nextID;
    nextID++;
    notesObject.notes[body.id] = body;
    res.status(201).json(notesObject.notes[body.id]);
  }

  app.delete('api/notes/:id', (req, res) => {
    const deleteId = Number(req.params.id);
    if (!Number.isInteger(deleteId) || deleteId <= 0) {
      res.status(400).json({ Error: 'id must be a positive integer' });
    } else if (!notesObject.notes[deleteId]) {
      res.status(404).json({ Error: `cannot find note with id ${deleteId}` });
    } else {
      delete notesObject.notes[deleteId];
    }
  });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on port 3000');
});
