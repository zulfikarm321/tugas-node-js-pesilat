const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

const config = require('./config/db');
config.db
    .sync()
    .then(() => console.log('Database di sinkronisasi'))
    .catch((error) => console.log('Database gagal di sinkronisasi : ', error));

const biodataRoute = require('./routes/biodata.route');

app.get('/', (req, res) => {
    res.send('<h1>Tugas CRUD Biodata</h1>');
});

app.use('/biodata', biodataRoute);

app.listen(PORT, () => console.log('Server berjalan pada port : ' + PORT));
