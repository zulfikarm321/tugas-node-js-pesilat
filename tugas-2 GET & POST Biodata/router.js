const express = require('express');
const router = express.Router();

// ENDPOINT GET
router.get('/biodata', (req, res) => {
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.query;

    res.send({
        nama,
        tempat_lahir,
        tanggal_lahir,
        alamat
    });
});

// ENDPOINT POST
router.post('/biodata',  (req, res) => {
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;

    res.send({
        nama,
        tempat_lahir,
        tanggal_lahir,
        alamat
    });
});

module.exports = router;
