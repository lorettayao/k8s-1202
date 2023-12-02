const express = require('express');
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080'); // Replace '*' with the specific origin of your frontend in a production environment.
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/data', (req, res) => {
  const dataFromFrontend = req.body.data;
  console.log('Data received from frontend:', dataFromFrontend);
  // Do something with the data (e.g., store it in a database)
  res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
