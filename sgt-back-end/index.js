const express = require('express');
const pg = require('pg');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `select *
              from "grades"`;
  db.query(sql).then(result => {
    const grades = result.rows;
    res.status(200).json(grades);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected error occurred' });
  });
});

app.post('/api/grades', (req, res, next) => {
  const text = `insert into "grades"
                   ("name", "course", "score")
            values ('$1', '$2', '$3')
            returning *`;
  const values = ['Marley Doughty', 'Javascript', '69'];
  db.query(text, values).then(result => {
    const body = req.body;
    if (!body.content) {
      res.status(400).json({ Error: 'content is a required field' });
    } else {
      res.status(201).json(body);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected error occurred' });
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on port 3000');
});
