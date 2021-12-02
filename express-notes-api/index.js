const express = require('express');
const notesObject = require('./data.json');
const app = express();
const fs = require('fs');
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
  } else {
    body.id = nextID;
    nextID++;
    notesObject.notes[body.id] = body;
    fs.writeFile('./data.json', JSON.stringify(notesObject, null, 2) + '\n', err => {
      if (err) {
        res.status(500).json({ Error: 'An unexpected error occured' });
      }
    });
    res.status(201).json(notesObject.notes[body.id]);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (!Number.isInteger(deleteId) || deleteId <= 0) {
    res.status(400).json({ Error: 'id must be a positive integer' });
  } else if (!notesObject.notes[deleteId]) {
    res.status(404).json({ Error: `cannot find note at id ${deleteId}` });
  } else {
    res.status(204).json({});
    delete notesObject.notes[deleteId];
    fs.writeFile('./data.json', JSON.stringify(notesObject, null, 2) + '\n', err => {
      if (err) {
        throw res.status(500).json({ Error: 'An unexpected error occured' });
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const updateId = Number(req.params.id);
  const body = req.body;
  if (!Number.isInteger(updateId) || updateId <= 0) {
    res.status(400).json({ Error: 'id must be positive integer' });
  } else if (Number.isInteger(updateId) && (!body.content)) {
    res.status(400).json({ Error: 'content field is required' });
  } else if (!notesObject.notes[updateId]) {
    res.status(404).json({ Error: `cannot find id at ${updateId}` });
  } else {
    notesObject.notes[updateId].content = body.content;
    fs.writeFile('./data.json', JSON.stringify(notesObject, null, 2) + '\n', err => {
      if (err) {
        res.status(500).json({ Error: 'An unexpected error occured' });
      }
    });
    res.status(201).json(notesObject.notes[updateId]);
  }
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on port 3000');
});
