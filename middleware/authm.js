//////////////////////////////////////////////Write a middleware that checks if a user is authenticated.


const express = require('express');
const app = express();

// Custom authentication middleware
function checkAuth(req, res, next) {
  const token = req.query.token; // get token from query param

  if (token === 'mysecrettoken') {
    console.log('✅ User authenticated');
    next();
  } else {
    console.log('❌ Unauthorized access');
    res.status(401).send('Unauthorized');
  }
}

app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Welcome to dashboard!');
});

app.listen(3000, () => console.log('Running on 3000'));
 
