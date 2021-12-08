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
  const body = req.body;
  const score = Number(body.score);
  const text = `insert into "grades"
                   ("name", "course", "score")
            values ($1, $2, $3)
            returning *`;
  const values = [body.name, body.course, score];
  if (!body.name || !body.course || !body.score) {
    res.status(400).json({ Error: 'All fields are required' });
    return;
  } else if (!Number.isInteger(score) || Number.isInteger(score) > 100) {
    res.status(400).json({ Error: 'Score must be a positive integer between 0-100' });
    return;
  }
  db.query(text, values).then(result => {
    res.status(201).json(result.rows[0]);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected error occurred' });
  });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const body = req.body;
  const name = body.name;
  const course = body.course;
  const score = body.score;
  if (!Number.isInteger(gradeId) || gradeId <= 0 || gradeId > 100) {
    res.status(400).json({ Error: 'Invalid gradeId' });
    return;
  } else if (!name || !course || !score) {
    res.status(400).json({ Error: 'All fields are required' });
    return;
  }
  const sql = `update "grades"
               set     "name" = $1,
                      "course" = $2,
                      "score" = $3
              where "gradeId" = $4
              returning *`;
  const updateValues = [name, course, score, gradeId];
  db.query(sql, updateValues).then(result => {
    if (!result.rows[0]) {
      res.status(404).json({ Error: `Cannot find grade with "gradeId" ${gradeId}` });
      return;
    }
    res.status(200).json(result.rows[0]);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected error occured' });
  });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const deleteId = Number(req.params.gradeId);
  if (!Number.isInteger(deleteId)) {
    res.status(400).json({ Error: 'Invalid gradeId' });
    return;
  }
  const sql = `delete from "grades"
                      where "gradeId" = $1
              returning *`;
  db.query(sql, [Number(deleteId)]).then(result => {
    const dbResult = result.rows[0];
    if (!dbResult) {
      res.status(400).json({ Error: `Cannot find grade at gradeId ${deleteId}` });
    } else {
      res.status(204).json(dbResult);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({ Error: 'An unexpected error occured' });
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on port 3000');
});
