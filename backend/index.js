// backend/index.js
const express = require('express');
const cors = require('cors');
const { connect } = require('./lib/database');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;

app.get('/api/test', async (req, res) => {
  try {
    const connection = await connect();
    const [rows, fields] = await connection.execute('SELECT * FROM study_post');
    connection.end();

    res.status(200).json({ users: rows });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
