# Book Catalog API

This is a simple Book Catalog API built with Node.js, Express, and MySQL.

## What is this?

A RESTful API that allows you to manage a catalog of books.  
You can add, view, update, delete, and search for books using HTTP requests.

## How does it work?

- The server is set up in `server.js` and listens on port 3001.
- All `/books` endpoints are routed to the book management logic in `routes/books.js`.
- When you run `node server.js`, you will see:
  ```
  Book Catalog API running on http://localhost:3001
  ```
  This means your server is running and ready to accept requests.

## Use of this project

- Can be used as the backend for a library or book management system.
- Allows users or applications to store, retrieve, update, and delete book records in a database through API endpoints.
- Can be connected to a frontend or used by other services to
