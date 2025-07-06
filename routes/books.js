const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new book
router.post('/', (req, res) => {
  const { title, author, genre, publicationYear, availability } = req.body;
  const sql = 'INSERT INTO books (title, author, genre, publicationYear, availability) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [title, author, genre, publicationYear, availability], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Get all books
router.get('/', (req, res) => {
  db.query('SELECT * FROM books', (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

// Get a book by ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) return res.status(500).send(err);
    if (rows.length === 0) return res.status(404).send('Book not found');
    res.json(rows[0]);
  });
});

// Update a book
router.put('/:id', (req, res) => {
  const { title, author, genre, publicationYear, availability } = req.body;
  const sql = 'UPDATE books SET title=?, author=?, genre=?, publicationYear=?, availability=? WHERE id=?';
  db.query(sql, [title, author, genre, publicationYear, availability, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Book updated successfully');
  });
});

// Delete a book
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM books WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Book deleted successfully');
  });
});

// Search books by title or author
router.get('/search/:query', (req, res) => {
  const searchQuery = `%${req.params.query}%`;
  const sql = 'SELECT * FROM books WHERE title LIKE ? OR author LIKE ?';
  db.query(sql, [searchQuery, searchQuery], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

module.exports = router;
