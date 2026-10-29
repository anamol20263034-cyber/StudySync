document.getElementById('fetchBtn').addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:5000/api/message');
    const data = await response.json();
    document.getElementById('responseMsg').innerText = data.message;
  } catch (error) {
    console.error('Error connecting to backend:', error);
    document.getElementById('responseMsg').innerText = 'Failed to connect to backend server.';
  }
});


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from StudySync Backend Server!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});