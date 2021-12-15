const express = require('express');
const path = require('path');
const app = express();

const pathJoin = path.join(__dirname, 'public');
const staticFiles = express.static(pathJoin);

app.use(staticFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000!');
});
