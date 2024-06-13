
const express = require('express');
const bodyParser = require('body-parser');
const agencyRoutes = require('./routes/agency');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/agencies', agencyRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
