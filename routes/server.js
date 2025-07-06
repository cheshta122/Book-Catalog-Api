const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes'); 
const db = require('./db'); 

app.use(express.json());
app.use('/books', bookRoutes); 

app.listen(3000, () => {
  console.log('Book Catalog API running on http://localhost:3000');
});
