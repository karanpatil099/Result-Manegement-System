const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Create the Express app
const app = express();
const port = 3000;

// Set up body parser middleware for JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname,)));

// Set up SQLite database
const db = new sqlite3.Database('students.db', (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Connected to SQLite database");
    // Create the table for storing student records if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        rollNumber TEXT NOT NULL,
        dbms INTEGER,
        toc INTEGER,
        nm INTEGER,
        se INTEGER
      )`);
  }
});

// Route to serve the add student form (for frontend)
app.get('/add-student', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', add-student.html));
});

// Handle POST request to add a student
app.post('/add-student', (req, res) => {
  const { name, rollNumber, dbms, toc, nm, se } = req.body;

  // Validate data
  if (!name || !rollNumber) {
    return res.status(400).json({ error: 'Name and Roll Number are required' });
  }

  // Insert the new student into the database
  const query = `
    INSERT INTO students (name, rollNumber, dbms, toc, nm, se)
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.run(query, [name, rollNumber, dbms, toc, nm, se], function(err) {
    if (err) {
      console.error("Error inserting student", err);
      return res.status(500).json({ error: 'Failed to add student' });
    }

    // Return the ID of the inserted student
    res.status(201).json({ message: 'Student added successfully!', studentId: this.lastID });
  });
});

// Route to fetch students (optional for viewing all students)
app.get('/students', (req, res) => {
  const query = `SELECT * FROM students`;

  db.all(query, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch students' });
    }
    res.json(rows); // Return the list of students
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
