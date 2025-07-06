const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

const app = express();
app.use(bodyParser.json());

app.use('/books', bookRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Book Catalog API running on http://localhost:${PORT}`);
});
