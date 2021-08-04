const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Server info

const PORT = process.env.PORT || 3001;
const app = express();
// Read URL / JSON middleware

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listener for port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
