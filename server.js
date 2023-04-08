// Install express if you haven't already: npm install express

const express = require('express');
const app = express();
const path = require('path');

const PORT = 9696;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
