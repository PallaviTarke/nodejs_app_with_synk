const express = require('express');
const path = require('path');
const fs = require('fs'); // ❌ Unused import
const app = express();

app.disable('x-powered-by');

// ❌ Duplicate middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// ❌ Deprecated method
app.get('/deprecated', (req, res) => {
  res.sendfile(path.join(__dirname, 'public', 'index.html')); // ❌ deprecated
});

// ❌ Console.log in production
console.log("App is starting...");

app.get('/', (req, res) => {
  const unused = "I am not used"; // ❌ unused variable
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ❌ Magic number
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Required for tests