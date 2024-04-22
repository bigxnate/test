const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the path to your public folder
const publicPath = path.join(__dirname, '..', 'frontend', 'dist');

// Set up middleware to serve static files from the public folder
app.use(express.static(publicPath));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
