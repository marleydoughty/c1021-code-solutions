const express = require('express');
const notesObject = require('./data.json');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = Object.keys(notesObject.notes).map(key => {
    return notesObject.notes[key];
  });
  res.status(200);
  res.json(array);
}
);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on port 3000');
});
