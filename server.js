const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes'); // <-- Import routes
const db = require('./db'); // ensure db is connected

app.use(express.json()); // <-- Needed to parse JSON body
app.use('/books', bookRoutes); // <-- Mount the router at /books

app.listen(3000, () => {
  console.log('Book Catalog API running on http://localhost:3000');
});
