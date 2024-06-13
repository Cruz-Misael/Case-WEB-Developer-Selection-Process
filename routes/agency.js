
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/agencies.json');

// Helper function to read data from JSON file
const readData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

// Helper function to write data to JSON file
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Route to get all agencies
router.get('/', (req, res) => {
  const agencies = readData();
  res.json(agencies);
});

// Route to add a new agency
router.post('/', (req, res) => {
  const newAgency = req.body;
  const agencies = readData();
  agencies.push(newAgency);
  writeData(agencies);
  res.status(201).json(newAgency);
});

module.exports = router;
