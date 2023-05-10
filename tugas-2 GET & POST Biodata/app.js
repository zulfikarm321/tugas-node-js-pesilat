const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Home!</h1>');
});

const router = require('./router');
app.use('/', router);

app.listen(PORT, () => console.log('runnning di port ' + PORT));
