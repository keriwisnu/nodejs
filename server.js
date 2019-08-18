const express = require('express');
const app = express();

// Init middleware so we can req from body
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Welcome' }))

// Define routes
app.use('/coba1/:n', require('./soal1'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start at port ${PORT}`))